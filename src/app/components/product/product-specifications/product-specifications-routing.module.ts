import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSpecificationsComponent } from './product-specifications.component';


const routes: Routes = [
  {
    path: '',
    component: ProductSpecificationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSpecificationsRoutingModule { }
