import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./loginForm/login.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [AuthComponent, LoginComponent],
  providers: [],
  exports: [],
})
export class AuthModule {}
