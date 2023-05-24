import { TestBed } from '@angular/core/testing';

import { AddJourneyService } from './add-journey.service';

describe('AddJourneyService', () => {
  let service: AddJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
