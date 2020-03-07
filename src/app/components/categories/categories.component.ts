import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GlobalService } from "src/app/services/global/global.service";
import { ActivatedRoute } from "@angular/router";
import { MousesService } from "src/app/services/mouses/mouses.service";
import { KeyboardsService } from "src/app/services/keyboards/keyboards.service";
import { HeadphonesService } from "src/app/services/headphones/headphones.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  params;
  products: any;
  brands: any;
  filtered_products: any;

  asc_direction = true;

  price_direction: boolean;
  rating_direction: boolean;

  price_form: FormGroup;
  brands_form: FormGroup;

  get load() {
    return this.globalSevice.load;
  }

  constructor(
    public globalSevice: GlobalService,
    private mouseSevice: MousesService,
    private keyboardsSevice: KeyboardsService,
    private headphonesSevice: HeadphonesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.route.queryParams.subscribe(queryParams => {
      this.params = queryParams["category"];
      this.getProduct();
    });

    this.price_form = this.fb.group({
      from: [""],
      to: [""]
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  getProduct() {
    this.globalSevice.load = true;
    this.products = [];
    this.brands = [];
    this.filtered_products = [];

    setTimeout(() => {
      switch (this.params) {
        case "mouses":
          this.getMouses();
          break;
        case "keyboards":
          this.getKeyboards();
          break;
        case "headphones":
          this.getHeadphones();
          break;

        default:
          this.getMouses();
          break;
      }
    }, 1500);
  }

  setFromBrands(brands) {
    const data = brands.reduce((acc, item, index) => {
      acc[index] = false;

      return acc;
    }, {});

    this.brands_form = this.fb.group({ ...data });
    this.brands_form.valueChanges.subscribe(event => {
      this.filterProductsBrands(event);
    });
  }

  getMouses() {
    this.mouseSevice.getMouses().subscribe(({ success, response }) => {
      if (success) {
        const result = response;

        result.brands.forEach(element => {
          this.brands.push(element.title);

          this.products.push(...element.items.map(item => item));
        });

        this.filtered_products = this.products;
        this.sortProducts("rating");
        this.setFromBrands(this.brands);
        this.globalSevice.load = false;
      }
    });
  }

  getKeyboards() {
    this.keyboardsSevice.getKeyboards().subscribe(({ success, response }) => {
      if (success) {
        const result = response;

        result.brands.forEach(element => {
          this.brands.push(element.title);

          this.products.push(...element.items.map(item => item));
        });
        this.filtered_products = this.products;
        this.sortProducts("rating");
        this.setFromBrands(this.brands);
        this.globalSevice.load = false;
      }
    });
  }

  getHeadphones() {
    this.headphonesSevice.getHeadphones().subscribe(({ success, response }) => {
      if (success) {
        const result = response;

        result.brands.forEach(element => {
          this.brands.push(element.title);

          this.products.push(...element.items.map(item => item));
        });
        this.filtered_products = this.products;
        this.sortProducts("rating");
        this.setFromBrands(this.brands);
        this.globalSevice.load = false;
      }
    });
  }

  sortProducts(key) {
    this.asc_direction = !this.asc_direction;

    if (key === "price") {
      this.price_direction = !this.price_direction;
    } else if (key === "rating") {
      this.rating_direction = !this.rating_direction;
    }

    this.filtered_products = this.filtered_products.sort((a, b) => {
      return this.dateSortComparator(
        a[key],
        b[key],
        this.asc_direction ? "asc" : "desc"
      );
    });
  }

  dateSortComparator(a, b, direction) {
    if (a > b) return direction === "desc" ? -1 : 1;
    if (b > a) return direction === "asc" ? -1 : 1;
    return 0;
  }

  filterProductsPrice(from = 0, to = Math.max) {
    this.filtered_products = this.products.filter(item => {
      return item.price >= from && item.price <= to;
    });
  }

  filterProductsBrands(event) {
    this.filtered_products = [];
    const data = Object.values(event);

    this.brands.forEach((element, intex) => {
      if (data[intex] === true) {
        this.filtered_products.push(
          ...this.products.filter(item => {
            return element === item.brand;
          })
        );
      }
    });
  }

  submitFilterPrice() {
    const value = this.price_form.value;

    this.filterProductsPrice(value.from, value.to);
  }
}
