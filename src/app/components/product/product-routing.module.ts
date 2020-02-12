import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductSpecificationsComponent } from './product-specifications/product-specifications.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';


const routes: Routes = [
  {
    path: '',
    component: ProductContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about',
      },
      {
        path: 'about',
        component: ProductAboutComponent,
      },
      {
        path: 'description',
        component: ProductDescriptionComponent,
      },
      {
        path: 'specifications',
        component: ProductSpecificationsComponent,
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
