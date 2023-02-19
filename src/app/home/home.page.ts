import { Component } from '@angular/core';
import { ProductsProviderService } from '../api/products-provider.service';

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
export class HomePage {

  title: string = 'Restaurant';
  productsProvider: ProductsProviderService = {} as ProductsProviderService;

  constructor(productsProviderService: ProductsProviderService) {
    this.productsProvider = productsProviderService;
  }
  

}
