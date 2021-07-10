import { TestBed } from '@angular/core/testing';

import { CitizenDetailsService } from './citizen-details.service';

describe('CitizenDetailsService', () => {
  let service: CitizenDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
