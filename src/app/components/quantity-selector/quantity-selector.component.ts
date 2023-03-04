import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  // template: `
  //   <div class="content">
  //     <ion-fab-button (click)="subtraction()">
  //       <ion-icon name="remove-outline"></ion-icon>
  //     </ion-fab-button>
  //     <p>{{quantity}}</p>
  //     <ion-fab-button (click)="addition()">
  //       <ion-icon name="add"></ion-icon>
  //     </ion-fab-button>
  //   </div>`,
  styleUrls: ['./quantity-selector.component.scss'],
})
export class QuantitySelectorComponent {
  
  @Input() quantity!: number;
  @Output() quantityChange = new EventEmitter<number>();
  constructor() { }

  addition = () => this.editQuantity(+1);
  subtraction = () => this.quantity > 0 ? this.editQuantity(-1) : {};

  editQuantity = (quantity: number) => {
    this.quantity = this.quantity + quantity;
    this.quantityChange.emit(this.quantity);
  }

}
