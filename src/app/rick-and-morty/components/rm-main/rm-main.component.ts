import { Component, OnInit } from '@angular/core';
import { Character, CharactersResponse } from './../../models/rm-models';
import { RickandmortyApiService } from './../../services/rickandmorty-api.service';

@Component({
  selector: 'app-rm-main',
  templateUrl: './rm-main.component.html',
  styleUrls: ['./rm-main.component.sass']
})
export class RmMainComponent implements OnInit {
  title = 'Rick and Morty';
  characters : Character[] = [];
  
  constructor(private rickandmortyService : RickandmortyApiService) { }

  ngOnInit(): void {
    this.rickandmortyService.getCharacters()
      .subscribe((data:CharactersResponse) => this.characters = data.results)
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('rick-morty');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('rick-morty');
  }

  killAllCharacters () {
    this.characters.filter(character => character.status !== 'unknown').map( character => character.status = 'Dead');
  }

  reviveAllCharacters () {
    this.characters.filter(character => character.status !== 'unknown').map( character => character.status = 'Alive');
  }
}
