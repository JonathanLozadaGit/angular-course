import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { DetailResponse } from '../../models/pokemon-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonDetailComponent implements OnInit {
  title = 'POKEDEX';
  detail:DetailResponse | undefined;
  type : string  = '';
  prev : number = 0;
  next : number = 0;
  constructor(
    private pokemonService : PokemonServiceService,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.pokemonService.getPokemonById(id)
      .subscribe(data => {
        this.detail = data;
        this.type = this.detail?.types[0].type.name;
      })
      this.prev = parseInt(id, 10) - 1;
      this.next = parseInt(id, 10) + 1;

    }
    
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('pokemon');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('pokemon');
  }

}
