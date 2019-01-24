import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}
  fetchAll(): Observable<Order[]> {
    return this.http.get<Order[]>('https://c098da06.ngrok.io/orders');
  }
  public saveOrder() {
    // TODO: implement and test
  }
}
