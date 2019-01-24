import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {
  constructor(private ordersService: OrderService) {}
  loaded = false;
  orders: Order[] = [];
  fetchAllOrders() {
    this.loaded = false;
    this.ordersService.fetchAll().subscribe((data: Order[]) => {
      this.orders = data;
      this.loaded = true;
    });
  }
  ngOnInit() {
    this.fetchAllOrders();
  }

}
