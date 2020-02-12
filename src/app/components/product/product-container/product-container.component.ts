import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  nav_links = [];

  constructor() {
    this.pushLinks(this.nav_links);
  }

  ngOnInit(): void {
  }

  pushLinks(array) {
    array.push(
      {
        path: 'about',
        label: 'О товаре',
      },
      {
        path: 'description',
        label: 'Описание',
      },
      {
        path: 'specifications',
        label: 'Характеристики',
      },
      {
        path: 'reviews',
        label: 'Отзывы',
      }
    )
  }

}
