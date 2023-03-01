import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent{

  @Input() product: Product = {} as Product;

  constructor() { }

  cancel = () => {
    console.log('cancel');
  }

  addToCart = () => {
    console.log('add to cart');
  }

  confirm = () => {
    console.log('confirm');
  }

}
