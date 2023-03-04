import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-check-out-button',
    template: `
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button (click)="onClick()">
                <ion-icon name="cart"></ion-icon>
                <ion-badge>{{ badgeValue }}</ion-badge>
            </ion-fab-button>
        </ion-fab>
        `,
    // styleUrls: ['./check-out-button.component.scss'],
})

export class CheckOutButtonComponent {

    @Input() badgeValue: number = 0;
    @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

    @HostBinding('attr.vertical') vertical: string = 'bottom';
    @HostBinding('attr.horizontal') horizontal: string = 'end';
    @HostBinding('attr.slot') slot: string = 'fixed';
    constructor() { }

    onClick = () => this.onClickEvent.emit();
}
