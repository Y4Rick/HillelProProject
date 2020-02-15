import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  get product() {
    return this.globalSevice.product;
  }
  constructor(private globalSevice: GlobalService) { }

  ngOnInit(): void {
  }

}
