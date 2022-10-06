import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirbnbDetailRoutingModule } from './airbnb-detail-routing.module';
import { DetailViewComponent } from './component/detail-view/detail-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './component/sections/intro/intro.component';
import { ReviewsComponent } from './component/sections/reviews/reviews.component';
import { MapComponentComponent } from './component/sections/map/map-component.component';


@NgModule({
  declarations: [
    DetailViewComponent,
    IntroComponent,
    ReviewsComponent,
    MapComponentComponent,

  ],
  imports: [
    CommonModule,
    AirbnbDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AirbnbDetailModule { }
