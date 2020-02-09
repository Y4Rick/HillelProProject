import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MousesService } from '../mouses/mouses.service';
import { HeadphonesService } from '../headphones/headphones.service';
import { KeyboardsService } from '../keyboards/keyboards.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: any;
  sorted_dada: any;

  constructor(
    private mousesService: MousesService,
    private headphonesService: HeadphonesService,
    private keyboardsService: KeyboardsService,
    ) {
      this.mousesService.getMouses().subscribe(({ success, response }) => {
        if (success) {
          this.data = [];
          this.data.push(response);
          this.headphonesService.getHeadphones().subscribe(({ success, response }) => {
            if (success) {
              this.data.push(response);
              this.keyboardsService.getKeyboards().subscribe(({ success, response }) => {
                if (success) {
                  this.data.push(response);
                }
              })
            }
          });
        }
      });
  }

  getProducts(): Observable<any> {
    return of(this.data);
  }

  getSelectedProducts(query): Observable<any> {
    this.sorted_dada = { success: true , response: [] };
    this.sorted_dada.response = _.cloneDeep(this.data);

    this.sorted_dada.response.forEach(item => {
        item.brands.forEach(item => {
          item.items = item.items.filter(item => {
            return item.name.toUpperCase().includes(query.toUpperCase());
          });
        });
    });
    
    return of(this.sorted_dada);
  }
}