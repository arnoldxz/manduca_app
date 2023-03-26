import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CheckoutService } from '../api/checkout/checkout.service';
import { ProductsProvider } from '../api/products/products-provider.service';
import { sswitch } from '../common/rx-operators';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { ItemDetailsComponent } from '../components/item-details/item-details.component';
import { Item } from '../models/Order';
import { Product } from '../models/Product';
import { OrderHandlerService } from '../services/order-handler/order-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = 'Restaurant';

  public products$: Observable<Product[]>;
  public categories$: Observable<string[]>;
  public recomendedProducts$: Observable<Product[]>;
  public categoryFilter$: BehaviorSubject<string | null>;

  constructor(
    productsProvider: ProductsProvider,
    public orderHandlerService: OrderHandlerService,
    private checkoutService: CheckoutService,
    private modalController: ModalController
  ) {
    this.categoryFilter$ = new BehaviorSubject<string | null>(null);
    const products$ = productsProvider.getProducts();

    this.products$ = this.categoryFilter$.pipe(
      sswitch(
        filterTerm => !!filterTerm,
        // If category filter term is not null, returns products filtered by category
        filterTerm => products$.pipe(
          map(x => x.filter(({ category }) => filterTerm === category))
        ),
        // Else, return the entire products collection.
        _ => products$
      )
    );

    this.categories$ = products$.pipe(
      map(x => x.map(({ category }) => category).distinct())
    );

    this.recomendedProducts$ = products$.pipe(
      map(x => x.filter(({ isRecomended }) => isRecomended))
    );
  }

  onProductSelected = async (product: Product) => {
      const modal = await this.modalController.create({
        component: ItemDetailsComponent,
        componentProps: { product }
      });

      await modal.present();
      const { data: item, role } = await modal.onDidDismiss<Item>();

      // !!item check is redundant. Just for the compiler sake
      if (role === 'confirm' && !!item) {
        this.orderHandlerService.addOrUpdateItem(item);
      }

      // Also, investigate further how to infer model 'role' types:
      // type ItemDetailsComponentResultRole = 'confirm' | 'cancel';
  };

  onCheckout = async () => {
      const modal = await this.modalController.create({
        component: CheckOutComponent,
        componentProps: { orderHandlerService: this.orderHandlerService }
      });

      await modal.present();

      const { role } = await modal.onDidDismiss();
      if (role === 'confirm') {
        console.log('Order confirmed');
      }
  }
}
