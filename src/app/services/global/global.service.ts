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

  set product(value) {
    this._product = value;
  }

  get product() {
    return this._product;
  }

  get shopping_cart() {
    return this._shopping_cart;
  }

  set load(value) {
    this._load = value;
  }

  get load() {
    return this._load;
  }

  constructor() {}
}
