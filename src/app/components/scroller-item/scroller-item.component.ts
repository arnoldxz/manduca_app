import { Component, Input, OnInit } from '@angular/core';
import { ScrollerItem as ScrollerItem } from 'src/app/models/internal/ScrollerItem';

@Component({
  selector: 'app-scroller-item',
  templateUrl: './scroller-item.component.html',
  styleUrls: ['./scroller-item.component.scss'],
})
export class ScrollerItemComponent implements OnInit {
  i: number = 345678;
  item: ScrollerItem = {} as ScrollerItem;
  constructor(
    
    ) { }
    
    ngOnInit() {
      this.item.id = this.i;
      this.item.title = 'Title ' + this.i;
      this.item.description = 'loreipsum  ' + this.i;
      this.item.image = 'https://picsum.photos/200/300?random=' + this.i;

  }

}
