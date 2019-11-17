// import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { fakeBackendProvider } from "./interceptors/fakeBackend.interceptor";
import { tokenInterceptor } from "./interceptors/token.interceptor";
import { NoAuthGuard } from "./guards/no-auth.guard";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [],
  imports: [],
  providers: [fakeBackendProvider, tokenInterceptor, AuthGuard, NoAuthGuard],
})
export class CoreModule {}
