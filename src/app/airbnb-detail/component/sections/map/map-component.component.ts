import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.sass']
})
export class MapComponentComponent implements OnInit, AfterViewInit  {

  map : any;
  @Input() position : number[] = [];

  constructor() { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.position[1], this.position[0] ],
      zoom: 10
    });

    const icon = L.icon({
      iconUrl: 'assets/images/marker-icon.png',
      popupAnchor: [2, 2],
    });

    const marker = L.marker([this.position[1], this.position [0]], { icon }).bindPopup('Angular Leaflet');
    marker.addTo(this.map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  
  ngOnInit(): void {
  }

}
