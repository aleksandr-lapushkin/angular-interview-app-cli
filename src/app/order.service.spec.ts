import { OrderService } from './order.service';
import { Order } from './order/order';
import { OrderStatus } from './order/order-status';
import { of } from 'rxjs';

let httpClientSpy: {get: jasmine.Spy };
let orderService: OrderService;

describe('OrderService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    orderService = new OrderService(<any> httpClientSpy);

  });

  it('should retrieve a list of orders', () => {
    const expectedOrders: Order[] = [
      {id: 0, title: 'Test', status: OrderStatus.PROCESSING}
    ];

    httpClientSpy.get.and.returnValue(of(expectedOrders));

    orderService.fetchAll().subscribe(orders => expect(orders).toEqual(expectedOrders, 'expected orders'), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call to HTTP client expected');
  });
});
