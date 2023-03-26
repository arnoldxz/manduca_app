import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Item } from 'src/app/models/Order';
import { OrderHandlerService } from 'src/app/services/order-handler/order-handler.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {

  public items: ReadonlyArray<Item>;

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    { items }: OrderHandlerService,
  ) {
    this.items = items;
  }

  public get totalPrice() {
    return this.items.reduce((acc, {product: {price}, quantity}) => acc + price * quantity, 0);
  }

  async removeOrderItem(item: Item, showAlert: boolean) {
    // if (showAlert && item.quantity > 1) {
    //   const alert = await this.alertController.create({
    //     header: `Remove ${item.product.name}`,
    //     message: `How many ${item.product.name} do you want to remove?`,
    //     inputs: [
    //       {
    //         name: 'quantity',
    //         type: 'number',
    //         min: 1,
    //         max: item.quantity,
    //         value: 1
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel'
    //       },
    //       {
    //         text: 'Remove',
    //         handler: (data) => {
    //           if (data.quantity < item.quantity) {
    //             item.quantity -= data.quantity;
    //           } else {
    //             this.orderHandlerService.removeOrderItem(item);
    //           }
    //         }
    //       }, {
    //         text: 'Remove all',
    //         handler: () => {
    //           this.orderHandlerService.removeAllItems(item);
    //         }
    //       }
    //     ]
    //   });

    //   await alert.present();
    // } else {
    //   this.orderHandlerService.removeOrderItem(item);
    // }
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

