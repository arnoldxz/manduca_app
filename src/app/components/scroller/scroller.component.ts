import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit() {}
  
}
