import { Component, OnInit, Input } from "@angular/core";
import { ShoppingService } from "src/app/services/shopping/shopping.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  addToShoppingCart(product) {
    this.shoppingService.addToShoppingCart(product);
  }
}
