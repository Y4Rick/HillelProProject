import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global/global.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  get shopping_cart() {
    return this.globalService.shopping_cart;
  }

  get all_price() {
    return this.globalService.all_price;
  }

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {}
}
