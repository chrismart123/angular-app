import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public message: string;
  loginUserData: any = {};

  constructor(public authService: AuthService, public router: Router) {
    this.loginUserData = {};
  }

  ngOnInit() {
    this.loginUserData.user = "";
    this.loginUserData.password = "";
  }

  loginUser() {
    console.log("loginUser");
    // this.authService.loginUser(this.loginUserData);
  }

  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }

  login() {
    this.message = "Trying to log in ...";

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = "/dashboard";

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: "preserve",
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
