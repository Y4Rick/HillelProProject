import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  filtered_products: any;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    ) {
      this.form = this.fb.group({
        search: [''],
      });
    }

  ngOnInit(): void {
    this.form.get('search').valueChanges.subscribe(query => {
      if (query.length > 2) {
        this.searchProducts(query);
      }
    });
  }

  searchProducts(query) {
    this.productService.getSelectedProducts(query).subscribe(({ success, response }) => {
      if (success) {
        this.filtered_products = response.reduce((acc, item) => {
          let filteredItems = item.brands.reduce((acc, item) => {

            acc.push(...item.items);
            return acc;
          }, []);

          acc.push({ category: item.category, items: filteredItems})
          return acc;
        }, []);
      }
    });
  }
}
