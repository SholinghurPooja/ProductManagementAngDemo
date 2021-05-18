import { TestBed } from '@angular/core/testing';

import { BedroomDataService } from './bedroom-data.service';

describe('BedroomDataService', () => {
  let service: BedroomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedroomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
