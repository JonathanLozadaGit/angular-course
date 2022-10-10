import { TestBed } from '@angular/core/testing';

import { RickandmortyApiService } from './rickandmorty-api.service';
import { HttpClient } from '@angular/common/http';

describe('RickandmortyApiService', () => {
  let service: RickandmortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} }
      ]
    });
    service = TestBed.inject(RickandmortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
