import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
// import { HeaderComponent } from "../components/header/header.component";
// import { SidebarComponent } from "../components/sidebar/sidebar.component";

import { DashboardService } from "../dashboard/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  showDefaultMessage = true; // default state
  message: string;
  constructor(public dashService: DashboardService, public router: Router) {}

  ngOnInit() {
    console.log("DashboardComponent");
    this.setMessage();
  }

  setMessage() {
    this.showDefaultMessage = true;
    this.message = "Logged " + (this.dashService.isLoggedIn ? "in" : "out");
  }

  logout() {
    this.dashService.logout();
    this.setMessage();
    this.router.navigate([""]);
  }

  toggleDefaultMessage(state: boolean) {
    this.showDefaultMessage = state;
  }
}
