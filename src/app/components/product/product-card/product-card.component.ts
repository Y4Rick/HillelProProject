import { Component, OnInit, Input } from "@angular/core";
import { ShoppingService } from "src/app/services/shopping/shopping.service";
import { GlobalService } from "src/app/services/global/global.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  get shopping_cart() {
    return this.globalService.shopping_cart;
  }

  constructor(
    private shoppingService: ShoppingService,
    public globalService: GlobalService
  ) {}

  ngOnInit(): void {
    if (
      this.shopping_cart.length &&
      this.shopping_cart.find(item => item.code === this.product.code)
    ) {
      this.product.card_css = "accent";
    }
  }

  addToShoppingCart(product) {
    this.shoppingService.addToShoppingCart(product);
    this.product.card_css = "accent";
  }
}
