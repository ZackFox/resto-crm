import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from "./auth/auth.module";
import { DashboardModule } from "./dashboard/dashboard.module";
// import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AuthModule,
    DashboardModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
