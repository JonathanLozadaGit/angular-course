import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../models/pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  title = 'PokéDex';
  pokemons : Pokemon[] | undefined;
  constructor(private pokemonService : PokemonServiceService) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemons()
      .subscribe(data => this.pokemons = data)
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('pokemon');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('pokemon');
  }

}
