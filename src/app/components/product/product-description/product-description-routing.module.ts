import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDescriptionComponent } from './product-description.component';


const routes: Routes = [
  {
    path: '',
    component: ProductDescriptionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDescriptionRoutingModule { }
