import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() productSelectedEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}
  
  itemClick = (product: Product) => 
    this.productSelectedEvent.emit(product)
  
}
