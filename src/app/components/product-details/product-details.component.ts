import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OrderItem } from 'src/app/models/OrderItem';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent{

  @Input() product: Product = {} as Product;
  quantity: number = 0;

  constructor(private modalCtrl: ModalController) { }

  cancel = () => {
    this.modalCtrl.dismiss({}, 'cancel');
    console.log('cancel');
  }

  confirm = () => {
    const orderItem: OrderItem = {
      product: this.product,
      quantity: this.quantity
    }
    this.modalCtrl.dismiss(orderItem, 'confirm')
    console.log('confirm');
  }

  onUpdateQuantityEvent = (quantity: number) => {
    this.quantity = quantity;
    console.log(`Quantity: ${this.quantity}`);
  }

}
