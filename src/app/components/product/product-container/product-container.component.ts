import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { DeliveryService } from '../../../services/delivery/delivery.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  nav_links = [];
  delivery_tabs = [];
  delivery_companies = [];
  headTemplate = 0;
  displayedColumns: string[] = ['title', 'cost', 'time'];
  product_id;

  get product() {
    return this.globalSevice.product;
  }

  constructor(
    private deliveryService: DeliveryService,
    private globalSevice: GlobalService,
    private productService: ProductService,
    private route: ActivatedRoute,
    ) {
      this.pushLinks(this.nav_links);

      this.route.parent.params.subscribe((params) => {
        this.product_id = params['product_id'];
        this.getProduct(this.product_id);
      });
  }
  
  ngOnInit(): void {
    this.getDelivery();
  }

  getProduct(code) {
    this.productService.getProduct().subscribe(({ success, response }) => {
      if (success) {
        let products: any;

        setTimeout(() => {
          products = response.reduce((acc, item) => {

            let brands = item.brands.reduce((acc, item) => {
            
              acc.push(...item.items);              
              return acc;
            }, []);

            acc.push(...brands)
            return acc;
            
          }, []);

          this.globalSevice.product = products.find(item => item.code === Number.parseInt(code) );
        }, 500);
      }
    })
  }

  getDelivery() {
    this.deliveryService.getDeliveriesInfo().subscribe(({ success, response }) => {      
      if (success) {
        this.delivery_tabs = response;
        this.delivery_companies = response.reduce((acc, item) => {
          acc.push(item.companies);
          return acc;
        }, []);                
      }
    });
  }

  pushLinks(array) {
    array.push(
      {
        path: 'about',
        label: 'О товаре',
      },
      {
        path: 'description',
        label: 'Описание',
      },
      {
        path: 'specifications',
        label: 'Характеристики',
      },
      {
        path: 'reviews',
        label: 'Отзывы',
      }
    )
  };

  tabChanged(event) {
    this.headTemplate = event.index;
  }
}
