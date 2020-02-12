import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAboutRoutingModule } from './product-about-routing.module';
import { ProductAboutComponent } from './product-about.component';


@NgModule({
  declarations: [ProductAboutComponent],
  imports: [
    CommonModule,
    ProductAboutRoutingModule
  ]
})
export class ProductAboutModule { }
