import { Component, Input, OnInit } from '@angular/core';
import { Character, EpisodeResponse } from '../../models/rm-models';
import { RickandmortyApiService } from '../../services/rickandmorty-api.service';

@Component({
  selector: 'app-rm-card',
  templateUrl: './rm-card.component.html',
  styleUrls: ['./rm-card.component.sass']
})
export class RmCardComponent implements OnInit {

  @Input() character: Character | undefined;
  firstEpisode : EpisodeResponse | undefined;

  constructor(private rickandmortyService : RickandmortyApiService) { }

  ngOnInit(): void {
    // Get first episode data from Character
    if(this.character?.episode[0]) {
      this.rickandmortyService.getEpisode(this.character.episode[0])
        .subscribe((data: EpisodeResponse) => this.firstEpisode = data)
    }
  }

}
