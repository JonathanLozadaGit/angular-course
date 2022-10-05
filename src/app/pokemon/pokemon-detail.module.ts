import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PokemonIdPipe } from './pipes/pokemon-id.pipe';

import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonTypeDirective,
    PokemonIdPipe,
  ],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    MatIconModule,
    MatTabsModule,
  ]
})
export class PokemonDetailModule { }
