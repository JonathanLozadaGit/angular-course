import { TestBed } from '@angular/core/testing';

import { StarwarsApiService } from './starwars-api.service';
import { HttpClient } from '@angular/common/http';

describe('StarwarsApiService', () => {
  let service: StarwarsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} }
      ]
    });
    service = TestBed.inject(StarwarsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
