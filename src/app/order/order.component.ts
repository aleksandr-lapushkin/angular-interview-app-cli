import { Component, OnInit } from '@angular/core';
import { Order } from '../order/order';
import { OrderStatus } from '../order/order-status';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  constructor() {}
  statuses = Object.keys(OrderStatus);
  ngOnInit() {}
  saveOrder() {
    // TODO: implement
    console.log('Saving order');
  }
}
