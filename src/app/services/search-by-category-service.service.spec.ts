import { TestBed } from '@angular/core/testing';

import { SearchByCategoryServiceService } from './search-by-category-service.service';

describe('SearchByCategoryServiceService', () => {
  let service: SearchByCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
