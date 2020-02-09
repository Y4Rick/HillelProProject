import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeyboardsService {

  constructor(private http: HttpClient) { }

  getKeyboards(): Observable<any> {
    return this.http.get(`assets/data/products/keyboards/keyboards.json`);
  }
}
