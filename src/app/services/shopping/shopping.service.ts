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
    console.log(this.globalService);

    this.shopping_cart.push(value);
    console.log(this.shopping_cart);
  }

  resetShoppingCart() {
    this.shopping_cart.slice(1, -1);
    console.log(this.shopping_cart);
  }

  deletePruductFromShoppingCart(product_code) {
    const index = this.shopping_cart.findIndex(
      item => item.code === product_code
    );
    this.shopping_cart.slice(index, 1);
    console.log(this.shopping_cart);
  }
}
