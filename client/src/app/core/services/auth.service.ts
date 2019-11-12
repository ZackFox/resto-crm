import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private token = this.cookieService.get("token") || null;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticate(): boolean {
    return !!this.token;
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post("/api/v1/login", credentials).pipe(
      tap(data => {
        this.cookieService.set("token", data.token);
        this.setToken(data.token);
      })
    );
  }

  logout() {
    this.cookieService.delete("token");
    this.setToken(null);
  }
}
