import { Component, OnInit, OnDestroy } from "@angular/core";
import { GlobalService } from "src/app/services/global/global.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShoppingService } from "src/app/services/shopping/shopping.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit, OnDestroy {
  form: FormGroup;
  finish = false;

  get shopping_cart() {
    return this.globalService.shopping_cart;
  }

  get all_price() {
    return this.globalService.all_price;
  }

  get load() {
    return this.globalService.load;
  }

  constructor(
    public globalService: GlobalService,
    private fb: FormBuilder,
    private shoppingService: ShoppingService
  ) {
    this.globalService.load = true;

    setTimeout(() => {
      this.globalService.load = false;
    }, 1500);

    this.form = this.fb.group({
      first_name: ["", [Validators.required]],
      second_name: ["", [Validators.required]],
      tel: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
          )
        ]
      ],
      adress: ["", [Validators.required]],
      products: [
        this.shopping_cart.length
          ? this.shopping_cart.map(item => {
              return { code: item.code, quantity: item.quantity };
            })
          : []
      ]
    });
  }
  ngOnDestroy(): void {
    this.finish = false;
  }

  ngOnInit(): void {}

  valuechange(event, product) {
    this.shoppingService.changeQuantity(parseInt(event), product);

    this.form.get("products").setValue(
      this.shopping_cart.map(item => {
        return { code: item.code, quantity: item.quantity };
      })
    );
  }

  remove(product) {
    this.shoppingService.deletePruductFromShoppingCart(product.code);

    this.form.get("products").setValue(
      this.shopping_cart.map(item => {
        return { code: item.code, quantity: item.quantity };
      })
    );
  }

  finishAll() {
    this.finish = true;
    this.shoppingService.resetShoppingCart();
  }

  submit() {
    this.finishAll();
    console.log(`Форма которая улетит на бэк:`);
    console.log(this.form.value);
  }
}
