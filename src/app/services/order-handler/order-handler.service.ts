import { Injectable } from '@angular/core';
import { IItem, Order, Item } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderHandlerService {
  // Make 'Order' simpler and convert it to an items array.
  public order: Order = new Order([]);

  // Since this service is a singleton,
  // make the "order" a subject that components can subscribe to changes
  // and compute the values they need (i.e.: length, total price, product quantity)

  addOrUpdateItem = (item: Item) => {
      console.log("addOrUpdateItem", item);
      let existingItem = this.order.items.find(x => item.product === x.product);
      if (!existingItem) {
          this.order.items.push(item);
          return;
      }
      existingItem.quantity = item.quantity;
  }

  removeOrderItem = (orderItem: IItem) => {
      console.log("removeOrderItem", orderItem);
      this.order.items = this.order.items.filter(x => x !== orderItem);
  }

  getOrderItemFromProduct = (product: Product): Item | null =>
      this.order.items.find(item => item.product === product) || null;

  getOrCreateOrderItem = (product: Product): Item => {
      let orderItem = this.getOrderItemFromProduct(product);
      if (!orderItem) {
          orderItem = new Item(product, 1);
          this.order.items.push(orderItem);
          console.log("this.order.items");
          console.log(this.order.items);
          return orderItem;
      }
      return orderItem;
  }

  getItems = (): Item[] => this.order.items;

  getItemsLength = (): number => this.order.items.length || 0;

  getTotalProductQuantity = (): number => this.order.totalQuantity;

}

