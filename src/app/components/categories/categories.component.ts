import { Component, EventEmitter, Input, Output } from '@angular/core';

export type CategoryViewModel = {
  category: string;
  selected: boolean;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {

  items: CategoryViewModel[] = [];

  @Input()
  public set categories(value: string[]) {
    this.items = value.map(category => ({ category, selected: false }));
  }

  @Output()
  private categorySelected = new EventEmitter<string | null>();

  public toggleCategory = (item: CategoryViewModel) => {
    const { selected: wasSelected } = item;
    this.items.forEach(x => x.selected = false);

    if (wasSelected) {
      // Notify no category filter
      this.categorySelected.next(null);
      return;
    }

    item.selected = true;
    this.categorySelected.next(item.category);
  }
}
