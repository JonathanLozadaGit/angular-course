import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharactersResponse, EpisodeResponse } from '../models/rm-models';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyApiService {

  charactersURL : string = 'https://rickandmortyapi.com/api/character';
  
  constructor(private http: HttpClient) { }

  getCharacters() : Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(this.charactersURL)
  }

  getEpisode(episodeURL : string) : Observable<EpisodeResponse> {    
    return this.http.get<EpisodeResponse>(episodeURL);
  }
}
