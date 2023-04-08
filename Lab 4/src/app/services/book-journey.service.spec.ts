import { TestBed } from '@angular/core/testing';

import { BookJourneyService } from './book-journey.service';

describe('BookJourneyService', () => {
  let service: BookJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
