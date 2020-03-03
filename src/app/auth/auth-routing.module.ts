import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

const authRoutes: Routes = [{ path: "login", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(authRoutes), FormsModule],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
