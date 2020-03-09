import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingCartRoutingModule } from "./shopping-cart-routing.module";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, ShoppingCartRoutingModule, MatIconModule],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule {}
