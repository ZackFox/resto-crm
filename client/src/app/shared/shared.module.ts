import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
