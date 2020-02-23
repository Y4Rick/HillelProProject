import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProductService } from "../../services/product/product.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  form: FormGroup;
  filtered_products: any;
  no_results = false;
  private subscription$ = new Subscription();

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.form = this.fb.group({
      search: [""]
    });
  }

  ngOnInit(): void {
    this.subscription$ = this.form
      .get("search")
      .valueChanges.subscribe(query => {
        this.no_results = false;

        if (query.length > 2) {
          this.searchProducts(query);

          if (this.filtered_products.length === 0) {
            this.no_results = true;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  searchProducts(query) {
    this.productService
      .getSelectedProducts(query)
      .subscribe(({ success, response }) => {
        if (success) {
          this.filtered_products = response.reduce((acc, item) => {
            let filteredItems = item.brands.reduce((acc, item) => {
              item.items.forEach(item => {
                item.productLink = `product/${item.code}`;
              });

              acc.push(...item.items);
              return acc;
            }, []);

            acc.push({ category: item.category, items: filteredItems });
            return acc;
          }, []);
        }
      });
  }
}
