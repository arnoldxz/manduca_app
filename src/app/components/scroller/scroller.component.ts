import { Component, OnInit } from '@angular/core';
import { ScrollerItem } from 'src/app/models/internal/ScrollerItem';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss'],
})
export class ScrollerComponent implements OnInit {

  items: ScrollerItem[] = [];

  constructor() { 
    for (let i = 0; i < 10; i++) {
      let item: ScrollerItem = {
        id: i,
        title: 'Title ' + i,
        description: 'Description ' + i,
        image: 'https://picsum.photos/200/300?random=' + i
      }
      this.items.push(item);
    }
   }

  ngOnInit() {}

  // loadData(event: any) {
  //   setTimeout(() => {
  //     for (let i = 0; i < 15; i++) {
  //       this.items.push(i);
  //     }
  //     event.target.complete();

  //     // Disable infinite scroll if there's no more data to load
  //     if (this.items.length >= 90) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }
}
