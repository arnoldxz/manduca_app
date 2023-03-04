import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-check-out-button',
    templateUrl: './check-out-button.component.html',
    styleUrls: ['./check-out-button.component.scss'],
})

export class CheckOutButtonComponent {

    @Input() badgeValue: number = 0;
    @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    onClick = () => this.onClickEvent.emit();
}
