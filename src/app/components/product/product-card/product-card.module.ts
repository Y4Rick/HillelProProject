import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductCardRoutingModule } from "./product-card-routing.module";
import { ProductCardComponent } from "./product-card.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, ProductCardRoutingModule, MatCardModule],
  exports: [ProductCardComponent]
})
export class ProductCardModule {}
