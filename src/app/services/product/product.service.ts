import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MousesService } from '../mouses/mouses.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    ) { }

  getProducts(): Observable<any> {
    return this.http.get(`assets/data/products/headphones/headphones.json`);
  }

  getSelectedProducts(query): Observable<any> {
    return this.http.get(`assets/data/products/headphones/headphones.json`);
  }
}
