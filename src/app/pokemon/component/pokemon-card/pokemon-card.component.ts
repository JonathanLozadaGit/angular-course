import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;
  type : string | undefined = '';
  constructor() { }

  ngOnInit(): void {
    this.type = this.pokemon?.detail?.types[0].type.name;
  }

}
