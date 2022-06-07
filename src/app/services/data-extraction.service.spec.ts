import { TestBed } from '@angular/core/testing';

import { DataExtractionService } from './data-extraction.service';

describe('DataExtractionService', () => {
  let service: DataExtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataExtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
