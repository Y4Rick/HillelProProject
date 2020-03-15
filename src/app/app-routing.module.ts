import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/telemart.it.hillel"
  },
  {
    path: "telemart.it.hillel",
    children: [
      {
        path: "",
        component: LayoutComponent,
        children: [
          {
            path: "",
            pathMatch: "full",
            loadChildren:
              "./components/main-page/main-page.module#MainPageModule"
          },
          {
            path: "product/:product_id",
            loadChildren: "./components/product/product.module#ProductModule"
          },
          {
            path: "categories",
            loadChildren:
              "./components/categories/categories.module#CategoriesModule"
          },
          {
            path: "order",
            loadChildren: "./components/copy/categories.module#CategoriesModule"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
