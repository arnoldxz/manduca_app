import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent {

  @Input() products: Product[] = [];
  @Output() productSelectedEvent = new EventEmitter<Product>();
  constructor() { }

  itemClick = (product: Product) => {
    console.log(`${product} clicked`);
    this.productSelectedEvent.emit(product);
  }
  
}
