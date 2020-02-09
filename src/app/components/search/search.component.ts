import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = new FormControl();;
  filtered_products = [];
  show_list = false;

  constructor(
    private productService: ProductService,
    ) {}

  ngOnInit(): void {
    this.search.valueChanges.subscribe(query => {     
      console.log('valueChanges', this.search);
      this.filtered_products = [];
      this.show_list = false;

      if (query.length > 2) {
        this.show_list = true;
        this.searchProducts(query);
      }
    });

    console.log(this.search);
    
  }

  rrr() {
    console.log();
    setTimeout(() => {
      this.show_list = false;
      
    }, 500);
  }

  userSelected(e) {
    console.log('click', e);
    this.show_list = false;
  }

  searchProducts(query) {
    this.productService.getSelectedProducts(query).subscribe(({ success, response }) => {
      if (success) {
        this.filtered_products = response;
        console.log(this.filtered_products);
        
      }
    });
  }
}
