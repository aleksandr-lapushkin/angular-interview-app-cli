import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { Component } from '@angular/core';
import { OrderStatus } from '../order/order-status';
import { of } from 'rxjs';
import { OrderService } from '../order.service';

@Component({selector: 'app-loader', template: ''})
class LoaderStubComponent {}

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    const orderService = jasmine.createSpyObj('OrderService', ['fetchAll']);
    orderService.fetchAll.and.returnValue(of([{id: 0, title: 'test', status: OrderStatus.PROCESSING}]));

    TestBed.configureTestingModule({
      declarations: [ OrderListComponent, LoaderStubComponent ],
      providers: [
        {provide: OrderService, useValue: orderService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
