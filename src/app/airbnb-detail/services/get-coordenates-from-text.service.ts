import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail-model';

@Injectable({
  providedIn: 'root'
})
export class GetCoordenatesFromTextService {

  constructor(private http: HttpClient) { 



  }


  getCoordenates(city: string): Observable<any> {

    let coordenates = this.http.get("https://www.mapquestapi.com/geocoding/v1/address?key=efpRzcQZ77fdDNhlG9bcuOJ2xA7dJald&location="+ city);

    return coordenates;

  }


  }

