import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { interval, map, tap } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-slider',
  template: `
    <ion-slides [pager]="true" class="slider" #slider>
      <ion-slide *ngFor="let item of products" class="slide" style.background-image="url('{{item.image}}')">
          <div class = "box">
            <h1><b>{{ item.name }}</b></h1>
            <p>{{ item.description }}</p>
          </div>
      </ion-slide>
    </ion-slides>
  `,
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {

  @Input() products: Product[] = [];
  @ViewChild('slider') slider!: { slideTo: (slide: number) => void };

  ngAfterViewInit() {
    const interval$ = interval(3000).pipe(
      map(x => x % this.products.length),
      tap(x => this.slider.slideTo(x))
    );

    interval$.subscribe();
  }
}
