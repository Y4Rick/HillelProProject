import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MousesService {

  constructor(private http: HttpClient) { }

  getMouses(): Observable<any> {
    return this.http.get(`assets/data/products/mouses/mouses.json`);
  }
}
