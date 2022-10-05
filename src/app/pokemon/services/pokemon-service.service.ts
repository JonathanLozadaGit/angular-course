import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, switchMap, withLatestFrom } from 'rxjs';
import { PokemonsResponse, Pokemon, DetailResponse } from '../models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  pokemonAPI : string = 'https://pokeapi.co/api/v2/pokemon/';
  limit : string = '66';
  
  constructor(private http: HttpClient) { }


  private getPokemonsDetail(pokemons : PokemonsResponse)  {
    return forkJoin(
      pokemons.results.map((p) => this.http.get<DetailResponse>(p.url))
    )
  }

  private mergeDetailsWithPokemons(pokemons : PokemonsResponse, details : DetailResponse[]){
    return details.map((d,i) => ({
      ...pokemons.results[i],
      detail: d
    }));
  }

  private handleError() {
    return[];
  }

  getListPokemons() : Observable<Pokemon[]>{
    const pokemons$ = this.http.get<PokemonsResponse>(this.pokemonAPI + '?limit=' + this.limit)
    return pokemons$
      .pipe(
        switchMap(this.getPokemonsDetail.bind(this)),
        withLatestFrom(pokemons$),
        map(([details,pokemons]) => this.mergeDetailsWithPokemons(pokemons, details)),
        catchError(this.handleError)
      );
  }

  getPokemonById(id : string) : Observable<DetailResponse>{
    return this.http.get<DetailResponse>(this.pokemonAPI + id)
  }
 
}
