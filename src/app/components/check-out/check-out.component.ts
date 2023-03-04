import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { IOrder, IItem, Item } from 'src/app/models/Order';
import { OrderHandlerService } from 'src/app/services/order-handler/order-handler.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  @Input() orderHandlerService: OrderHandlerService = {} as OrderHandlerService;

  constructor(private modalCtrl: ModalController, 
              private alertController: AlertController) {}

  items: Item[] = [];

  ngOnInit() {
    this.items = this.orderHandlerService.getItems()
    this.orderHandlerService.order.totalPrice
  }

  async removeOrderItem(item: IItem) {
    const alert = await this.alertController.create({
      message: `Are you sure you want to remove this item from your cart?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            this.orderHandlerService.removeOrderItem(item);
            this.items = this.orderHandlerService.getItems(); // update the items array
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  cancel = () => {
    this.modalCtrl.dismiss({}, 'cancel');
    console.log('cancel');
  }

  confirm = () => {
    this.modalCtrl.dismiss({}, 'confirm')
    console.log('confirm');
  }

}

