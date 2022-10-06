import { TestBed } from '@angular/core/testing';

import { AirbnbApiService } from './airbnb-api.service';

describe('AirbnbApiService', () => {
  let service: AirbnbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirbnbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
