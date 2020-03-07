import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainPageRoutingModule } from "./main-page-routing.module";
import { MainPageComponent } from "./main-page.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { ProductCardModule } from "../product/product-card/product-card.module";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgbModule,
    FormsModule,
    ProductCardModule
  ]
})
export class MainPageModule {}
