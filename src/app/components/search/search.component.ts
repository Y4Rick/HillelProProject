import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { MousesService } from 'src/app/services/mouses/mouses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = new FormControl();;

  products;
  mouses;

  options = ['aga','adsgar','adgfdgs', 'sgdrga', 'yuknyuj'];
  filtered_options = [];

  constructor(
    private fb: FormBuilder, 
    private productService: ProductService,
    private mouseService: MousesService
    ) {
    
    this.getProducts();

    this.getMouses();
    
  }

  ngOnInit(): void {

    console.log(this.products);
    
    this.search.valueChanges.subscribe(query => {      
      if (query.length > 2) {
        this.searchProducts(query)
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(({ success, response }) => {
      console.log('success', success, 'response',  response);
      // console.log('JSON.stringify', JSON.stringify(response));
      
      if (success) {
        this.products = response;
        console.log('this.products', this.products);
        
      }
    });
  }

  getMouses() {
    this.mouseService.getMouses().subscribe(({success, response}) => {
      console.log('success', success, 'response',  response);

      if (success) {
        this.mouses = response;
        console.log('this.mouses', this.mouses);
        
      }
    })
  }

  searchProducts(query) {
    this.filtered_options = this.options.filter(element => element.includes(query));
  }
}
