import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/telemart.it.hillel',
  },
  {
    path: 'telemart.it.hillel',
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'product/:id',
            loadChildren: './components/product/product.module#ProductModule',
          },
        ],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
