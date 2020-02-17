import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductContainerComponent } from './product-container/product-container.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ProductAboutModule } from './product-about/product-about.module';
import { ProductDescriptionModule } from './product-description/product-description.module';
import { ProductSpecificationsModule } from './product-specifications/product-specifications.module';
import { ProductReviewsModule } from './product-reviews/product-reviews.module';

@NgModule({
  declarations: [ProductContainerComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    ProductAboutModule,
    ProductDescriptionModule,
    ProductSpecificationsModule,
    ProductReviewsModule,
  ],
  exports: []
})
export class ProductModule { }
