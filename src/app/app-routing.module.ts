import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/* import modules so that AppModule can access them */
// import { BrowserModule } from "@angular/platform-browser";

import { AuthGuard } from "./auth/auth.guard";
// import { SelectivePreloadingStrategyService } from "./selective-preloading-strategy.service";
import { LoginComponent } from "./auth/login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
// import { HeaderComponent } from "./components/header/header.component";
// import { SidebarComponent } from "./components/sidebar/sidebar.component";
// import { FooterComponent } from "./footer/footer.component";

import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

// import { CrisisListComponent } from "./crisis-list/crisis-list.component";

// import { HeroesComponent } from "./heroes/heroes.component";

import { Dash1Component } from "./dashboard/dash1/dash1.component";
import { Dash2Component } from "./dashboard/dash2/dash2.component";

const appRoutes: Routes = [
  {
    path: "dashboard",
    // children: [
    //   {
    //     path: "",
    //     component: DashboardComponent
    //   },
    //   {
    //     path: "dash1",
    //     component: Dash1Component
    //   },
    //   {
    //     path: "dashboard/dash2",
    //     component: Dash2Component
    //   }
    // ],
    loadChildren: () =>
      import("./dashboard/dashboard-routing.module").then(
        m => m.DashboardRoutingModule
      ),

    canLoad: [AuthGuard]
  },

  {
    path: "login",
    component: LoginComponent,
    data: { preload: true }
  },
  {
    path: "",
    component: LoginComponent,
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false // <-- debugging purposes only
      //   preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
