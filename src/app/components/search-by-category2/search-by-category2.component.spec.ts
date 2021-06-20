import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCategory2Component } from './search-by-category2.component';

describe('SearchByCategory2Component', () => {
  let component: SearchByCategory2Component;
  let fixture: ComponentFixture<SearchByCategory2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByCategory2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
