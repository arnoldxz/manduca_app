import { Component, Input, OnInit } from '@angular/core';
import { ProductsProvider } from 'src/app/api/products/products-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public productsProvider: ProductsProvider;

  @Input() title: string = 'Title';

  constructor(productsProvider: ProductsProvider) {
    this.productsProvider = productsProvider;
  }

  ngOnInit() {}

}
