import { Component, Input, OnInit } from '@angular/core';
import { ProductsProviderService } from 'src/app/api/products/products-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public productsProvider: ProductsProviderService;

  @Input() title: string = 'Title';
  
  constructor(productsProvider: ProductsProviderService) {
    this.productsProvider = productsProvider;
  }

  ngOnInit() {}

}
