import { Component, OnInit } from '@angular/core';
import { ProductsProviderService } from '../api/products-provider.service';
import { Product } from '../models/Product';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    // template: `
    //   <app-header [title]="title"></app-header>
    //   <ion-content [fullscreen]="true">
    //     <app-slider [products]="this.productsProviderService.getRecommended()"></app-slider>
    //     <app-categories [categories]="this.productsProviderService.getCategories()"></app-categories>
    //     <app-scroller [products] = "this.productsProviderService.getProducts()"></app-scroller>
    //   </ion-content>
    // `,
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    title: string = 'Restaurant';
    productsProvider: ProductsProviderService = {} as ProductsProviderService;
    products: Product[] = [];

    constructor(productsProviderService: ProductsProviderService) {
        this.productsProvider = productsProviderService;
    }
    ngOnInit(): void {
        this.products = this.productsProvider.getProducts();
    }

    onCategorySelectedEvent = (category: string) => 
        this.products = this.productsProvider.getProductsByCategory(category);

    onProductSelectedEvent = () => {
        
    };

}
