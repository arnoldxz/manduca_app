import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit{

  @Input() item: Item = {} as Item;
  // @Output() itemChange = new EventEmitter<Item>();

  constructor(private modalCtrl: ModalController) { }
  
  ngOnInit(): void {
    console.log("ItemDetailsComponent");
    console.log(this.item);
  }

  cancel = () => this.modalCtrl.dismiss(this.item, 'cancel');
  confirm = () => this.modalCtrl.dismiss(this.item, 'confirm');
  

}
