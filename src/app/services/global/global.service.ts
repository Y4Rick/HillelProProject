import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _product: any;

  set product(value) {
    this._product = value;
  }

  get product() {
    return this._product;
  } 

  constructor() { }
  
}
