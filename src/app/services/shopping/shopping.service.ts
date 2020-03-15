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
      value.quantity_price = value.price;
      this.shopping_cart.push(value);

      this.calculatePrice();
    }
  }

  changeQuantity(value, product) {
    product.quantity = value;
    product.quantity_price = product.price * product.quantity;
    this.calculatePrice();
  }

  calculatePrice() {
    this.globalService.all_price = this.shopping_cart.reduce((acc, item) => {
      acc += item.quantity_price;

      return acc;
    }, null);
  }

  resetShoppingCart() {
    this.globalService.shopping_cart = [];
    this.globalService.all_price = 0;
  }

  deletePruductFromShoppingCart(product_code) {
    const index = this.shopping_cart.findIndex(
      item => item.code === product_code
    );
    this.shopping_cart.splice(index, 1);

    this.calculatePrice();
  }
}
