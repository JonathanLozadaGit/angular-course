import { TestBed } from '@angular/core/testing';

import { RickandmortyApiService } from './rickandmorty-api.service';

describe('RickandmortyApiService', () => {
  let service: RickandmortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickandmortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
