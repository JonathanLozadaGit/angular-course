import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, switchMap } from 'rxjs';
import { Detail } from '../models/detail-model';

@Injectable({
  providedIn: 'root'
})
export class AirbnbApiService {

  searchURL = 'https://airbnb-learning-api.herokuapp.com/search';
  detailURL = 'https://airbnb-learning-api.herokuapp.com/listings/';

  constructor(private http: HttpClient) { }

  getDetailById(id : string) : Observable<Detail>{
    return this.http.get<Detail>(this.detailURL + id)
  }

  getCurrentPosition(): Observable<GeolocationPosition>{
    return new Observable(subscriber => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        subscriber.next(position);
        subscriber.complete()
      })
    })
  }

  getRoomListByCurrentPosition(coordenadas: any): Observable<Detail[]> {
    return this.getCurrentPosition()
      .pipe(
        switchMap(pos => {
          const body = {
            position: {
              lat: coordenadas.lat ? coordenadas.lat : pos.coords.latitude ,
              lng: coordenadas.lng ? coordenadas.lng : pos.coords.longitude
            }
          }
          return this.http.post<Detail[]>(this.searchURL, body)
        })
      )
  }
}


