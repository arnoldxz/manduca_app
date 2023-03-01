import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order } from 'src/app/models/OrderItem';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  @Input() order: Order = {} as Order;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancel = () => {
    this.modalCtrl.dismiss({}, 'cancel');
    console.log('cancel');
  }

  confirm = () => {
    this.modalCtrl.dismiss({}, 'confirm')
    console.log('confirm');
  }

}
