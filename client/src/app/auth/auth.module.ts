import { NgModule } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./loginForm/login.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [AuthComponent, LoginComponent],
  providers: [CookieService],
  exports: []
})
export class AuthModule {}
