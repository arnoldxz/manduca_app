import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderHandlerService {

  private orderItems: Item[] = [];
  private _orderChanged$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  public get items(): ReadonlyArray<Readonly<Item>> {
    return this.orderItems;
  }

  public get orderChanged$(): Observable<Readonly<Item>[]> {
    return this._orderChanged$;
  }

  addOrUpdateItem = (item: Item) => {
    const existingItem = this.orderItems.find(({product: { id: productId }}) => productId === item.product.id);

    if (!!existingItem && !item.quantity) {
      this.orderItems = this.orderItems.filter(x => x !== existingItem);
      this._orderChanged$.next(this.orderItems);
      return;
    }

    if (!!existingItem && item.quantity) {
      existingItem.quantity = item.quantity;
      this._orderChanged$.next(this.orderItems);
      return;
    }

    if (!!item.quantity) {
      this.orderItems = [...this.orderItems, item];
      this._orderChanged$.next(this.orderItems);
    }
  }
}

