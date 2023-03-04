import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Order';

@Component({
  selector: 'app-check-out-list',
  templateUrl: './check-out-list.component.html',
  styleUrls: ['./check-out-list.component.scss'],
})
export class CheckOutListComponent implements OnInit{

  @Input() items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log("CheckOutListComponent", this.items);
  }


}
