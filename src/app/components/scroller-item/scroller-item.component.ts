import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-scroller-item',
  templateUrl: './scroller-item.component.html',
  styleUrls: ['./scroller-item.component.scss'],
})
export class ScrollerItemComponent implements OnInit {

  @Input() product: Product = {} as Product;

  constructor() { 
  }
  
  ngOnInit() {


    console.log(this.product);
  }

}
