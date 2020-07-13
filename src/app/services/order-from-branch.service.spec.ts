import { TestBed } from '@angular/core/testing';

import { OrderFromBranchService } from './order-from-branch.service';

describe('OrderFromBranchService', () => {
  let service: OrderFromBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFromBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
