// import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { fakeBackendProvider } from "./interceptors/fakeBackend.interceptor";
import { tokenInterceptor } from "./interceptors/token.interceptor";
import { AuthGuard } from "./services/auth.guard";

@NgModule({
  declarations: [],
  imports: [],
  providers: [fakeBackendProvider, tokenInterceptor, AuthGuard]
})
export class CoreModule {}
