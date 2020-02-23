import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  getDeliveriesInfo(): Observable<any> {
    return this.http.get(`assets/data/delivery/delivery.json`);
  }
}
