import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../auth.service";
import { Errors } from "../shared/errors.model";
import { Router } from "@angular/router";

@Component({
  selector: "login-form",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmiting: boolean = false;
  errors: string = "";

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  submit() {
    this.isSubmiting = true;
    this.errors = "";

    this.authService.login(this.loginForm.value).subscribe(
      res => {
        this.isSubmiting = false;
        console.log(res);
      },
      error => {
        this.errors = error;
        console.log(error);
      },
    );
  }
}
