import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  activeButton!: string;

  items: string[] = [];

  @Input() categories: string[] = [];
  constructor() { }

  ngOnInit() { }

  buttonClicked(category: string) {
    this.activeButton = category;
  }
}
