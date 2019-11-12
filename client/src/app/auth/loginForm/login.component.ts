import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "login-form",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmiting = false;
  errors = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit() {
    this.isSubmiting = true;
    this.errors = "";

    this.authService.login(this.loginForm.value).subscribe(
      res => {
        this.isSubmiting = false;
        this.router.navigateByUrl("/dashboard");
      },
      error => {
        this.errors = error.message;
      }
    );
  }
}
