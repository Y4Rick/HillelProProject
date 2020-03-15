import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderComponent } from "./order.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ]
})
export class OrderModule {}
