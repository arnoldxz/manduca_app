import { Product } from "./Product";

export interface OrderItem {
    product: Product;
    quantity: number;
}

export interface Order {
    id: string;
    order: OrderItem[];
    date: Date;
}