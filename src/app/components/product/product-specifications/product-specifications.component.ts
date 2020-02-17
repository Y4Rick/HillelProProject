import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global/global.service';

@Component({
  selector: 'app-product-specifications',
  templateUrl: './product-specifications.component.html',
  styleUrls: ['./product-specifications.component.scss']
})
export class ProductSpecificationsComponent implements OnInit {

  get product() {
    return this.globalSevice.product;
  }
  constructor(private globalSevice: GlobalService) { }

  ngOnInit(): void {
  }

}