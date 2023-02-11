import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SliderComponent } from '../components/slider/slider.component';
import { ScrollerComponent } from '../components/scroller/scroller.component';
import { ScrollerItemComponent } from '../components/scroller-item/scroller-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SliderComponent, ScrollerComponent, ScrollerItemComponent]
})
export class HomePageModule {}
