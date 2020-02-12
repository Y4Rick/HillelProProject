import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductContainerComponent } from './product-container/product-container.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductContainerComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: []
})
export class ProductModule { }
