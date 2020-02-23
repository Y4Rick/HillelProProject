import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeadphonesService {
  constructor(private http: HttpClient) {}

  getHeadphones(): Observable<any> {
    return this.http.get(`assets/data/products/headphones/headphones.json`);
  }
}
