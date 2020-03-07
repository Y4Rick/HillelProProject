import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories.component";
import { MatButtonModule } from "@angular/material/button";
import { ProductCardModule } from "../product/product-card/product-card.module";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatButtonModule,
    ProductCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class CategoriesModule {}
