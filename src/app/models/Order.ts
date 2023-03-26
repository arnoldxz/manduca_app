import { Product } from "./Product";

export interface IOrder {
    items: IItem[];
    totalQuantity: number;
}

export interface IItem {
    product: Product;
    quantity: number;
    totalPrice: number;
}

// Not needed anymore
export class Order implements IOrder {
  private _items: Item[] = [];

  constructor(items: Item[]) {
      this._items = items;
  }

  get items(): Item[] {
      return this._items;
  }

  set items(value: Item[]) {
      this._items = value;
  }

  get totalQuantity(): number {
      return this._items.reduce((agg, item) => agg + item.quantity, 0);
  }

  get totalPrice(): number {
      return this._items.reduce((agg, item) => agg + item.totalPrice, 0);
  }
}

export class Item implements IItem {

  constructor(public product: Product, public quantity: number) { }

  public get totalPrice() {
    return this.product.price * this.quantity;
  }
}
