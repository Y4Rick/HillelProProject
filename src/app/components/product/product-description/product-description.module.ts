import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDescriptionRoutingModule } from './product-description-routing.module';
import { ProductDescriptionComponent } from './product-description.component';


@NgModule({
  declarations: [ProductDescriptionComponent],
  imports: [
    CommonModule,
    ProductDescriptionRoutingModule
  ]
})
export class ProductDescriptionModule { }
