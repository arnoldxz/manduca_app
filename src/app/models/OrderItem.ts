import { Product } from "./Product";

export interface OrderItem {
    product: Product;
    quantity: number;
    itemTotalPrice: number;
}

export interface Order {
    id: string;
    order: OrderItem[];
}