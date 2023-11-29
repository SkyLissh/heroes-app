import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { SignupPageComponent } from "./pages/signup-page/signup-page.component";

const routes: Route[] = [
  {
    path: "",
    component: LayoutPageComponent,
    children: [
      { path: "login", component: LoginPageComponent },
      { path: "signup", component: SignupPageComponent },
      { path: "**", redirectTo: "login" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
