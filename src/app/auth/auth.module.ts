import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { SignupPageComponent } from "./pages/signup-page/signup-page.component";

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [SignupPageComponent, LoginPageComponent, LayoutPageComponent],
})
export class AuthModule {}
