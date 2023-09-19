import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignupPageComponent } from "./pages/signup-page/signup-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SignupPageComponent, LoginPageComponent, LayoutPageComponent]
})
export class AuthModule {}
