import { TestBed } from '@angular/core/testing';

import { OrderFromStockService } from './order-from-stock.service';

describe('OrderFromStockService', () => {
  let service: OrderFromStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFromStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
