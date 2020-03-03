import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { jqxBarGaugeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge";

// import { AuthService } from "./auth.service";
import { HeaderComponent } from "../components/header/header.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";

import { DashboardComponent } from "./dashboard.component";
import { Dash1Component } from "./dash1/dash1.component";
import { Dash2Component } from "./dash2/dash2.component";
import { JqwidgetComponent } from "./jqwidget/jqwidget.component";

import { AuthGuard } from "../auth/auth.guard";

const Routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    // redirectTo: "",
    // pathMatch: "full",
    canActivate: [AuthGuard],
    children: [
      {
        path: "dash1",
        component: Dash1Component,
        data: { preload: true }
      },
      {
        path: "dash2",
        component: Dash2Component,
        data: { preload: true }
      },
      {
        path: "jqwidgets",
        component: JqwidgetComponent,
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(Routes)],
  exports: [RouterModule],
  declarations: [
    jqxBarGaugeComponent,
    DashboardComponent,
    Dash1Component,
    Dash2Component,
    HeaderComponent,
    SidebarComponent
  ]
})
export class DashboardRoutingModule {}
