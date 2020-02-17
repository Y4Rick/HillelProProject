import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '../../../services/global/global.service';

@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.scss']
})
export class ProductAboutComponent implements OnInit {
  get product() {
    return this.globalSevice.product;
  }

  constructor(private globalSevice: GlobalService) {
  }
  
  ngOnInit(): void {
  }

}
