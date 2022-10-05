import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmMainComponent } from './components/rm-main/rm-main.component';
import { RmCardComponent } from './components/rm-card/rm-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';


@NgModule({
  declarations: [
    RmMainComponent,
    RmCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RickAndMortyRoutingModule,
  ]
})
export class RickAndMortyModule { }
