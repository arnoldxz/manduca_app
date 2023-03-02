import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order, OrderItem } from 'src/app/models/OrderItem';
import { OrderHandlerService } from 'src/app/services/order-handler/order-handler.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  @Input() order: Order = {} as Order;

  ordersItems!: OrderItem[];

  constructor(private modalCtrl: ModalController, private orderHandlerService: OrderHandlerService) { }

  get orderItems() {
    return this.orderHandlerService.order.order;
  }

  ngOnInit() {}

  cancel = () => {
    this.modalCtrl.dismiss({}, 'cancel');
    console.log('cancel');
  }

  confirm = () => {
    this.modalCtrl.dismiss({}, 'confirm')
    console.log('confirm');
  }

  removeOrderItem = (orderItem: OrderItem) => {
    this.orderHandlerService.removeOrderItem(orderItem);
  }

  deleteOrderItem = (orderItem: OrderItem) => {
    this.ordersItems = this.orderItems.filter(item => item !== orderItem);
  }

  get totalPrice() {
    let total = 0;
    this.orderItems.forEach(item => {
      if (item.quantity > 0) {
        total += item.product.price * item.quantity;
      }
    });
    return total;
  }

}
