import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductCardRoutingModule } from "./product-card-routing.module";
import { ProductCardComponent } from "./product-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule {}
