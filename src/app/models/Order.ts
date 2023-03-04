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
    private _product: Product = {} as Product;
    private _quantity: number = 0;
    private _totalPrice: number = 0;

    constructor(product: Product, quantity: number) {
        this._product = product;
        this._quantity = quantity;
        this._totalPrice = product.price * quantity;
    }

    get product(): Product {
        return this._product;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    set quantity(value: number) {
        this._quantity = value;
        this._totalPrice = this._product.price * value;
    }
    
    get quantity(): number {
        return this._quantity;
    }
}