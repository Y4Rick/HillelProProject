import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSpecificationsRoutingModule } from './product-specifications-routing.module';
import { ProductSpecificationsComponent } from './product-specifications.component';


@NgModule({
  declarations: [ProductSpecificationsComponent],
  imports: [
    CommonModule,
    ProductSpecificationsRoutingModule
  ]
})
export class ProductSpecificationsModule { }
