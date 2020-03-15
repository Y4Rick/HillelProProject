import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global/global.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  get shopping_cart() {
    return this.globalService.shopping_cart;
  }

  get all_price() {
    return this.globalService.all_price;
  }

  get load() {
    return this.globalService.load;
  }

  constructor(public globalService: GlobalService) {
    this.globalService.load = true;

    setTimeout(() => {
      this.globalService.load = false;
    }, 1500);
  }

  ngOnInit(): void {}
}
