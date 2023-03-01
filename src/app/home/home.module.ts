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
import { ProductDetailsComponent } from '../components/product-details/product-details.component';


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
    ProductDetailsComponent
  ]
})
export class HomePageModule {}
