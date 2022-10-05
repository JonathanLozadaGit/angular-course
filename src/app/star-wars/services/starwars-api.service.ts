import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/star-wars-model';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {

  urlAPI : string = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getCharacters() : Observable<Response>{

    return this.http.get<Response>(this.urlAPI);
  }
}
