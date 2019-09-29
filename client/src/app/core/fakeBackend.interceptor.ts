import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize, concatMap } from "rxjs/operators";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null)
      .pipe(mergeMap(this.handleRoute(request, next)))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }

  handleRoute(req: HttpRequest<any>, next: HttpHandler) {
    return (): Observable<HttpEvent<any>> => {
      switch (true) {
        case req.url.endsWith("/api/v1/login") && req.method === "POST":
          return this.login(req, next);
        case req.url.endsWith("/api/v1/user") && req.method === "GET":
          return this.getUser(req, next);
        default:
          return next.handle(req);
      }
    };
  }

  login(req: HttpRequest<any>, next: HttpHandler) {
    if (req.body.email !== "test@gmail.com" && req.body.password !== "12345") {
      return this.forbidden("Email или пароль указаны не верно");
    }
    return this.ok({ token: "Bearer fake-jwt-token" });
  }

  private ok(body?) {
    return of(new HttpResponse({ status: 200, body }));
  }

  getUser(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isLoggedIn(req.headers.get("Authorization"))) {
      return this.unauthorized();
    }
    return this.ok({ firstname: "John", lastname: "Connor" });
  }

  register(req: HttpRequest<any>, next: HttpHandler) {
    //TODO
  }

  private forbidden(message: string) {
    return throwError({ status: "Forbidden", code: 403, message });
  }

  private unauthorized() {
    return throwError({
      status: "Unauthorized",
      code: 401,
      message: "Необходимо авторизоваться",
    });
  }

  private isLoggedIn(authHeader: string) {
    return authHeader === "Bearer fake-jwt-token";
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
