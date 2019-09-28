import { Injectable } from "@angular/core";
import { Credentials } from "./shared/credentials.model";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    const { email, password } = credentials;
    if (email !== "test@gmail.com" && password !== "12345") {
      return throwError("Email или пароль указаны не верно");
    }
    return of({ firstname: "John", lastname: "Connor" });
  }
}
