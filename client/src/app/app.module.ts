import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { SelectorComponent } from "./selector/selector.component";
import { DatePipe } from "./shared/date.pipe";

@NgModule({
  declarations: [AppComponent, SelectorComponent, CalendarComponent, DatePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
