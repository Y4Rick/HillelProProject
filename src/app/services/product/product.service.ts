import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MousesService } from "../mouses/mouses.service";
import { HeadphonesService } from "../headphones/headphones.service";
import { KeyboardsService } from "../keyboards/keyboards.service";
import * as _ from "lodash";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  data: any;

  constructor(
    private mousesService: MousesService,
    private headphonesService: HeadphonesService,
    private keyboardsService: KeyboardsService
  ) {
    this.data = [];

    this.mousesService.getMouses().subscribe(({ success, response }) => {
      if (success) {
        this.data.push(response);
      }
    });

    this.headphonesService
      .getHeadphones()
      .subscribe(({ success, response }) => {
        if (success) {
          this.data.push(response);
        }
      });

    this.keyboardsService.getKeyboards().subscribe(({ success, response }) => {
      if (success) {
        this.data.push(response);
      }
    });
  }

  getProducts(): Observable<any> {
    return of(this.data);
  }

  getSelectedProducts(query): Observable<any> {
    const sorted_dada = { success: true, response: [] };
    sorted_dada.response = _.cloneDeep(this.data);

    sorted_dada.response = sorted_dada.response.filter(item => {
      item.brands = item.brands.filter(item => {
        item.items = item.items.filter(item => {
          return (
            item.name.toUpperCase().includes(query.toUpperCase()) ||
            item.code.toString().includes(query)
          );
        });
        return item.items.length > 0;
      });
      return item.brands.length > 0;
    });

    return of(sorted_dada);
  }

  getProduct(): Observable<any> {
    return of({ success: true, response: this.data });
  }

  addReview(product, value): Observable<any> {
    product.reviews.push(value);
    return of(product);
  }
}
