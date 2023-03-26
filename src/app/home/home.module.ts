import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SliderComponent } from '../components/slider/slider.component';
import { ScrollerComponent } from '../components/scroller/scroller.component';
import { ScrollerItemComponent } from '../components/scroller-item/scroller-item.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { HeaderComponent } from '../components/header/header.component';
import { QuantitySelectorComponent } from '../components/quantity-selector/quantity-selector.component';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { ItemDetailsComponent } from '../components/item-details/item-details.component';
import { CheckOutButtonComponent } from '../components/check-out-button/check-out-button.component';
import { CheckOutListComponent } from '../components/check-out-list/check-out-list.component';
import { CartComponent } from '../components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,
    SliderComponent,
    ScrollerComponent,
    ScrollerItemComponent,
    CategoriesComponent,
    HeaderComponent,
    ItemDetailsComponent,
    QuantitySelectorComponent,
    CheckOutComponent,
    CheckOutButtonComponent,
    CheckOutListComponent,
    CartComponent
  ]
})
export class HomePageModule {}
