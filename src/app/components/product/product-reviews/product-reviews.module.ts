import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductReviewsRoutingModule } from './product-reviews-routing.module';
import { ProductReviewsComponent } from './product-reviews.component';


@NgModule({
  declarations: [ProductReviewsComponent],
  imports: [
    CommonModule,
    ProductReviewsRoutingModule
  ]
})
export class ProductReviewsModule { }
