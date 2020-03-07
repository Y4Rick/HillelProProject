import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global/global.service";
import { ArticlesService } from "src/app/services/articles/articles.service";
import { ProductService } from "src/app/services/product/product.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  articles = [];
  best_products = [];

  get load() {
    return this.globalSevice.load;
  }

  constructor(
    private productService: ProductService,
    private globalSevice: GlobalService,
    private articlesSevice: ArticlesService
  ) {
    this.globalSevice.load = true;
  }

  ngOnInit(): void {
    this.getArticles();
    this.getProducts();
  }

  getArticles() {
    this.articlesSevice.getArticles().subscribe(({ success, response }) => {
      if (success) {
        this.articles = response;
      }
    });
  }

  getProducts() {
    this.productService.getProduct().subscribe(({ success, response }) => {
      if (success) {
        setTimeout(() => {
          this.best_products = response
            .reduce((acc, item) => {
              let brands = item.brands.reduce((acc, item) => {
                acc.push(...item.items);
                return acc;
              }, []);
              acc.push(...brands);
              return acc;
            }, [])
            .sort((a, b) => {
              return a.rating > b.rating ? -1 : 1;
            })
            .splice(1, 7);
          // console.log(this.best_products);
          this.globalSevice.load = false;
        }, 1500);
      }
    });
  }
}
