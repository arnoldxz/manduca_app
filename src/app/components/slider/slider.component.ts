import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-slider',
  // templateUrl: `./slider.component.html`,
  template: `
    <ion-slides [pager]="true" class="slider" #slider (ionSlideDidChange)="onSlideDidChange()">
      <ion-slide *ngFor="let item of products" class="slide" style.background-image="url('{{item.image}}')">
          <div class = "box">
            <h1>{{item.name}}</h1>
            <p>{{item.description}}</p>
          </div>
      </ion-slide>
    </ion-slides>
  `,
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  

  @Input() products: Product[] = [];
  @ViewChild('slider') slider: any;
  

  
  constructor() { 
  
  }
  ngOnInit() {
    // Establece el intervalo en el que se cambiarán las imágenes
    setInterval(() => {
      // Mueve el slider al siguiente slide
      this.slider.slideNext();
    }, 5000); // Establece el intervalo de tiempo en milisegundos (en este caso, 3 segundos)
  }

  onSlideDidChange() {
    // Verifica si el slide actual es el último
    this.slider.getActiveIndex().then((index: number) => {
      if (index === this.products.length - 1) {
        // Mueve el slider al primer slide
        setTimeout(() => {
          this.slider.slideTo(0);
        }, 5000);
      }
    });
  }
  

  


}
