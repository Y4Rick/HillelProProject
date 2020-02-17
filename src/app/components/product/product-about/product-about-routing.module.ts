import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAboutComponent } from './product-about.component';


const routes: Routes = [
  {
    path: '',
    component: ProductAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAboutRoutingModule { }
