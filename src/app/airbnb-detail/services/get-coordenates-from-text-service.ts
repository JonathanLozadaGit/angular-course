import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail-model';

@Injectable({
  providedIn: 'root'
})
 /**
     * Al darle a buscar se deben visualizar la lista de alojamientos cerca de esa ciudad. 
     * Como el API solo acepta latitud y longitud para la búsqueda, deberéis traducir la ciudad a sus coordenadas. 
     * Podéis usar el servicio que queráis, os pongo uno que tiene 15000 llamadas gratuitas al mes (https://developer.mapquest.com/)
      Si no hay alojamientos se deberá mostrar un mensaje al usuario en vez de el listado
     */

      const NodeGeocoder = require('node-geocoder');


export class GetCoordenatesFromTextService {

  searchURL = 'https://airbnb-learning-api.herokuapp.com/search';
  detailURL = 'https://airbnb-learning-api.herokuapp.com/listings/';

  constructor(private http: HttpClient) { 

    //https://developer.mapquest.com


    
    //http://www.mapquestapi.com/geocoding/v1/address


  }


}

