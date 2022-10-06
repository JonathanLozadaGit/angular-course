import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsModule } from './star-wars/star-wars.module';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonDetailModule } from './pokemon/pokemon-detail.module';

//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StarWarsModule,
    PokemonModule,
    PokemonDetailModule,
    RickAndMortyModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
