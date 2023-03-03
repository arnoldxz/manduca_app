import { Injectable } from '@angular/core';
import { Order, OrderItem } from 'src/app/models/OrderItem';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderHandlerService {

  order: Order = {
    id: '',
    order: [],
  }

  constructor() { }

  addOrderItem = (orderItem: OrderItem) => {
    console.log(`Order item added: ${orderItem.product.name} x ${orderItem.quantity}`);
    let existingItem = this.order.order.find(item => item.product.id === orderItem.product.id);
    if (existingItem) {
      existingItem.quantity += orderItem.quantity;
      existingItem.itemTotalPrice += existingItem.product.price * orderItem.quantity;
    } else {
      orderItem.itemTotalPrice = orderItem.product.price * orderItem.quantity;
      if (orderItem.quantity > 0) {
        this.order.order.push(orderItem);
      }
    }
  }

  removeOrderItem = (orderItem: OrderItem) => {
    console.log(`Order item removed: ${orderItem.product.name}`);
    this.order.order = this.order.order.filter(item => item !== orderItem);
  }

  removeAllItems(item: OrderItem) {
    this.order.order = this.order.order.filter((x: OrderItem) => x.product.id !== item.product.id);
  }
  
  
  
}

