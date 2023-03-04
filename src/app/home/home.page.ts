import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckoutService } from '../api/checkout/checkout.service';
import { ProductsProviderService } from '../api/products/products-provider.service';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { ItemDetailsComponent } from '../components/item-details/item-details.component';
import { Product } from '../models/Product';
import { OrderHandlerService } from '../services/order-handler/order-handler.service';

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

    constructor(productsProviderService: ProductsProviderService,
        public orderHandlerService: OrderHandlerService,
        private checkOutService: CheckoutService,
        private modalController: ModalController) {
        this.productsProvider = productsProviderService;
    }
    ngOnInit(): void {
        this.productsProvider.getProducts().subscribe(data => this.products = data);
    }

    onCategorySelectedEvent = (category: string) => 
        this.products = this.productsProvider.getProductsByCategory(category);

    onProductSelectedEvent = async (product: Product) => {
        const item = this.orderHandlerService.getOrCreateOrderItem(product);
        const modal = await this.modalController.create({
            component: ItemDetailsComponent,
            componentProps: { item: item }
        });
        
        await modal.present();
        modal.onDidDismiss().then(data => {
            (data.role === 'confirm' && this.orderHandlerService.addOrUpdateItem(data.data)) 
            || (data.role === 'cancel' && this.orderHandlerService.removeOrderItem(data.data))
            ||(item.quantity === 0) && this.orderHandlerService.removeOrderItem(data.data);
        });
    };

    onCheckout = async () => {
        // console.log('Order: ', this.orderHandlerService.order);
        
        const modal = await this.modalController.create({
            component: CheckOutComponent,
            componentProps: { orderHandlerService: this.orderHandlerService }
        });
        await modal.present();
        modal.onDidDismiss().then((data: any) => {
            if(data.role === 'confirm') {
                // this.checkOutService.checkout(this.orderHandlerService.order);
                console.log('Order confirmed');
            }
        });
    }

}
