import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../product/product.service";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  _load: boolean;
  _product: any;
  _shopping_cart = [];
  _all_price: number;

  set product(value) {
    this._product = value;
  }

  get product() {
    return this._product;
  }

  set all_price(value) {
    this._all_price = value;
  }

  get all_price() {
    return this._all_price;
  }

  get shopping_cart() {
    return this._shopping_cart;
  }

  set shopping_cart(value) {
    this._shopping_cart = value;
  }

  set load(value) {
    this._load = value;
  }

  get load() {
    return this._load;
  }

  constructor() {}
}
