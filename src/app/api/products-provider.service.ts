import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsProviderService {

  private readonly products: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 100, image: 'https://picsum.photos/200/300?random=1', category: 'Category 1', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 200, image: 'https://picsum.photos/200/300?random=2', category: 'Category 1', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '3', name: 'Product 3', description: 'Description 3', price: 300, image: 'https://picsum.photos/200/300?random=3', category: 'Category 1', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '4', name: 'Product 4', description: 'Description 4', price: 400, image: 'https://picsum.photos/200/300?random=4', category: 'Category 1', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '5', name: 'Product 5', description: 'Description 5', price: 500, image: 'https://picsum.photos/200/300?random=5', category: 'Category 2', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '6', name: 'Product 6', description: 'Description 6', price: 600, image: 'https://picsum.photos/200/300?random=6', category: 'Category 2', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '7', name: 'Product 7', description: 'Description 7', price: 700, image: 'https://picsum.photos/200/300?random=7', category: 'Category 2', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '8', name: 'Product 8', description: 'Description 8', price: 800, image: 'https://picsum.photos/200/300?random=8', category: 'Category 3', isRecomended: false, isAvailable: true, isOnSale: false },
    { id: '9', name: 'Product 9', description: 'Description 9', price: 900, image: 'https://picsum.photos/200/300?random=9', category: 'Category 3', isRecomended: false, isAvailable: true, isOnSale: true },
    { id: '10', name: 'Product 10', description: 'Description 10', price: 1000, image: 'https://picsum.photos/200/300?random=10', category: 'Category 4', isRecomended: true, isAvailable: false, isOnSale: true },
    { id: '11', name: 'Product 11', description: 'Description 11', price: 1100, image: 'https://picsum.photos/200/300?random=11', category: 'Category 4', isRecomended: true, isAvailable: true, isOnSale: false },
    { id: '12', name: 'Product 12', description: 'Description 12', price: 1200, image: 'https://picsum.photos/200/300?random=12', category: 'Category 4', isRecomended: true, isAvailable: true, isOnSale: false },
  ]

  constructor() { }

  public getCategories = () => this.products.map(p => p.category).filter((value, index, self) => self.indexOf(value) === index);

  public getRecommended = () => this.products.filter((value, index, self) => value.isRecomended);

  public getProducts = () => this.products;

}
