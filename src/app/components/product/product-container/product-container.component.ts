import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  nav_links = [];
  delivery_tabs = [];
  headTemplate = 0;
  displayedColumns: string[] = ['title', 'cost', 'time'];

  constructor() {
    this.pushLinks(this.nav_links);
    this.showDeliveryTabs(this.delivery_tabs);
  }

  ngOnInit(): void {
    console.log(this.delivery_tabs);
    
  }

  showDeliveryTabs(array) {
    array.push(
      {
        label: 'КИЕВ',
        slug: 'kv',
        companies: [
          { 
            title: 'Нова Пошта',
            terms: [
              { 
                term: 'Самовывоз из отделения',
                cost: '50 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером до дверей',
                cost: '50 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером Локал Экспресс до дверей',
                cost: '50 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером Локал Экспресс до дверей',
                cost: '50 грн.',
                time: 'завтра',
              },
              { 
                term: 'Без комиссии за наложенный платеж',
                cost: '',
                time: '',
              }
            ],
          },
          {
            title: 'Meest Express',
            terms: [
              { 
                term: 'Курьером до дверей',
                cost: 'бесплатно',
                time: 'сегодня',
              },
              { 
                term: 'Без комиссии за наложенный платеж',
                cost: '',
                time: '',
              },
            ],
          }
        ],
      },
      {
        label: 'ОДЕССА',
        slug: 'od',
        companies: [
          { 
            title: 'Нова Пошта',
            terms: [
              { 
                term: 'Самовывоз из отделения',
                cost: '45 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером до дверей',
                cost: '50 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером Локал Экспресс до дверей',
                cost: '45 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером Локал Экспресс до дверей',
                cost: '45 грн.',
                time: 'завтра',
              },
              { 
                term: 'Без комиссии за наложенный платеж',
                cost: '',
                time: '',
              }
            ],
          },
          {
            title: 'Meest Express',
            terms: [
              { 
                term: 'Курьером до дверей',
                cost: 'бесплатно',
                time: 'сегодня',
              },
              { 
                term: 'Без комиссии за наложенный платеж',
                cost: '',
                time: '',
              },
            ],
          }
        ],
      },
      {
        label: 'ЛЬВОВ',
        slug: 'lv',
        companies: [
          { 
            title: 'Нова Пошта',
            terms: [
              { 
                term: 'Самовывоз из отделения',
                cost: '55 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером до дверей',
                cost: '55 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером Локал Экспресс до дверей',
                cost: '55 грн.',
                time: 'завтра',
              },
              { 
                term: 'Курьером Локал Экспресс до дверей',
                cost: '55 грн.',
                time: 'завтра',
              },
              { 
                term: 'Без комиссии за наложенный платеж',
                cost: '',
                time: '',
              }
            ],
          },
        ],
      }
    );
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
  };

  tabChanged(event) {
    this.headTemplate = event.index;
  }
}
