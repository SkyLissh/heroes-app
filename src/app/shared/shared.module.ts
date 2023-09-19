import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

@NgModule({
  declarations: [NotFoundPageComponent],
  exports: [NotFoundPageComponent],
  imports: [CommonModule]
})
export class SharedModule {}
