import { TestBed } from '@angular/core/testing';

import { PokemonServiceService } from './pokemon-service.service';
import { HttpClient } from '@angular/common/http';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} }
      ]
    });
    service = TestBed.inject(PokemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
