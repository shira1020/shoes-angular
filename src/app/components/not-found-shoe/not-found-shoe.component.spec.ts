import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundShoeComponent } from './not-found-shoe.component';

describe('NotFoundShoeComponent', () => {
  let component: NotFoundShoeComponent;
  let fixture: ComponentFixture<NotFoundShoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
