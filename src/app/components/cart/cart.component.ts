import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { OrderHandlerService } from "src/app/services/order-handler/order-handler.service";

@Component({
  selector: `app-cart`,
  template: `
<ion-fab vertical="bottom" horizontal="end" style="transform: translateX(-30%);">
  <ion-fab-button>
      <ion-icon name="cart"></ion-icon>
      <ion-badge>{{quantity$ | async}}</ion-badge>
  </ion-fab-button>
</ion-fab>
  `
})
export class CartComponent {

  public quantity$: Observable<number>;

  constructor(orderService: OrderHandlerService) {
    this.quantity$ = orderService.orderChanged$.pipe(
      // length for showing off how many different products are in the cart
      // items.reduct((acc, { quantity }) => quantity, 0) for showing off how
      // many products + quantity are there.
      map(items => items.length)
    );
  }
}
