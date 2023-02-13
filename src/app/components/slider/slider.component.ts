import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-slider',
  // templateUrl: `./slider.component.html`,
  template: `
    <ion-slides [pager]="true" class="slider">
      <ion-slide *ngFor="let item of products">
          <div class = "box">
            <h1>{{item.name}}</h1>
            <p>{{item.description}}</p>
          </div>
      </ion-slide>
    </ion-slides>
  `,
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {

  @Input() products: Product[] = [];
  
  constructor() { }

}
