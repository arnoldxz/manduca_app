import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IOrder, Order } from 'src/app/models/Order';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'  
})

export class CheckoutService {

    constructor(private httpService: HttpService) { }

    public checkout = (order: IOrder): Observable<IOrder> => {
        return this.httpService.post<IOrder>('orders')
            .pipe(tap(res => console.log(`Post response: ${res}`)));
    }
}
