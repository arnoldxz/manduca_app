import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  activeButton!: string;

  items: string[] = [];

  @Input() categories: string[] = [];
  @Output() categorySelectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  buttonClicked(category: string) {
    this.activeButton = category;
    this.categorySelectedEvent.emit(category);
  }
}
