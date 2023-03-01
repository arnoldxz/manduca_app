import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckoutService } from '../api/checkout/checkout.service';
import { ProductsProviderService } from '../api/products-provider.service';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
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
        private orderHandlerService: OrderHandlerService,
        private checkOutService: CheckoutService,
        private modalController: ModalController) {
        this.productsProvider = productsProviderService;
    }
    ngOnInit(): void {
        this.products = this.productsProvider.getProducts();
    }

    onCategorySelectedEvent = (category: string) => 
        this.products = this.productsProvider.getProductsByCategory(category);

    onProductSelectedEvent = async (product: Product) => {
        const modal = await this.modalController.create({
            component: ProductDetailsComponent,
            componentProps: {
                product: product
            }
        });
        
        await modal.present();
        modal.onDidDismiss().then((data: any) => {
            console.log(`${data}`);
            if (data.role === 'confirm') {
                console.log('Product confirmed');
                this.orderHandlerService.addOrderItem(data.data.product);
            }
        });
    };

    checkout = async () => {
        const modal = await this.modalController.create({
            component: CheckOutComponent,
            componentProps: {
                order: this.orderHandlerService.order
            }
        });
        await modal.present();
        modal.onDidDismiss().then((data: any) => {
            if(data.role === 'confirm') {
                // this.checkOutService.checkout(this.orderHandlerService.order);
                console.log('Order confirmed');
            }
        })
    }

}
