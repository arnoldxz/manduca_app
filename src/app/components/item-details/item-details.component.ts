import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { OrderHandlerService } from 'src/app/services/order-handler/order-handler.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {

  @Input() product!: Product;
  public item!: Item;

  constructor(
    private modalCtrl: ModalController,
    private orderHandler: OrderHandlerService
  ) { }

  ngOnInit(): void {
    const orderItem = this.orderHandler.items.find(({ product }) => this.product.id === product.id);
    this.item = orderItem ?? new Item(this.product, 1);
  }

  cancel = () => this.modalCtrl.dismiss(null, 'cancel');
  confirm = () => this.modalCtrl.dismiss(this.item, 'confirm');
}
