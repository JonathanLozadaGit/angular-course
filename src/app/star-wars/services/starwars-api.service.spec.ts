import { TestBed } from '@angular/core/testing';

import { StarwarsApiService } from './starwars-api.service';

describe('StarwarsApiService', () => {
  let service: StarwarsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
