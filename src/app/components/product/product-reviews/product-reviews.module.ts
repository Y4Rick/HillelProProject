import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductReviewsRoutingModule } from './product-reviews-routing.module';
import { ProductReviewsComponent, ProductRewiewsDialogComponent } from './product-reviews.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ProductReviewsComponent, ProductRewiewsDialogComponent],
  imports: [
    CommonModule,
    ProductReviewsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    ProductRewiewsDialogComponent
  ],
})
export class ProductReviewsModule { }
