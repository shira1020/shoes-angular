import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFromBranchesComponent } from './orders-from-branches.component';

describe('OrdersFromBranchesComponent', () => {
  let component: OrdersFromBranchesComponent;
  let fixture: ComponentFixture<OrdersFromBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersFromBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFromBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
