import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { CommonModule } from "@angular/common";

import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { AuthComponent } from "./auth/auth.component";
import { FormsModule } from "@angular/forms";
// import { HeaderComponent } from "./components/header/header.component";
// import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
    // HeaderComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
