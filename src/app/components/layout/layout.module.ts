import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { Overlay } from "@angular/cdk/overlay";
import { SearchModule } from "../search/search.module";
import { ProductModule } from "../product/product.module";
import { MainPageModule } from "../main-page/main-page.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { CategoriesModule } from "../categories/categories.module";
import { ShoppingCartModule } from "../shopping-cart/shopping-cart.module";
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    SearchModule,
    ProductModule,
    CategoriesModule,
    MainPageModule,
    ShoppingCartModule
  ],
  providers: [Overlay]
})
export class LayoutModule {}
