import { Injectable } from "@angular/core";
import { GlobalService } from "../global/global.service";

@Injectable({
  providedIn: "root"
})
export class ShoppingService {
  get shopping_cart() {
    return this.globalService.shopping_cart;
  }

  constructor(public globalService: GlobalService) {}

  addToShoppingCart(value) {
    if (!this.shopping_cart.find(item => item.code === value.code)) {
      value.quantity = 1;
      this.shopping_cart.push(value);

      this.calculatePrice();
    }
  }

  increaseQuantity(product) {
    product.quantity = product.quantity + 1;
  }

  decreaseQuantity(product) {
    if (product.quantity === 1) {
      return;
    }
    product.quantity = product.quantity - 1;
  }

  calculatePrice() {
    this.globalService.all_price = this.shopping_cart.reduce((acc, item) => {
      acc += item.price;

      return acc;
    }, null);
  }

  resetShoppingCart() {
    this.shopping_cart.slice(1, -1);
  }

  deletePruductFromShoppingCart(product_code) {
    const index = this.shopping_cart.findIndex(
      item => item.code === product_code
    );
    this.shopping_cart.slice(index, 1);
  }
}
