import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './component/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
