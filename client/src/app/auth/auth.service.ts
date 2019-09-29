import { Injectable } from "@angular/core";
import { Credentials } from "./shared/credentials.model";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { tap } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(credentials: Credentials): Observable<any> {
    const { email, password } = credentials;

    return this.http.post("/api/v1/login", credentials).pipe(
      tap(data => {
        this.cookieService.set("token", data.token);
      }),
    );
  }

  isLogin() {}

  logout() {}
}
