import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { HeaderComponent } from "../components/header/header.component";
import { AuthService } from "../auth/auth.service";

@Component({
  // providers: [HeaderComponent],
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    console.log("AdminComponent");
    this.setMessage();
  }

  setMessage() {
    this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    this.router.navigate([""]);
  }
}
