import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss'],
})
export class QuantitySelectorComponent {
  quantity: number = 0;

  @Output() quantityChangeEvent = new EventEmitter<number>();
  constructor() { }

  addition = () => {
    this.quantity++;
    this.quantityChangeEvent.emit(this.quantity);
  }

  subtraction = () => {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChangeEvent.emit(this.quantity);
    }
  }

}
