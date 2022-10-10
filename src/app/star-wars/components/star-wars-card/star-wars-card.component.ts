import { Component, Input } from '@angular/core';
import { Character } from '../../models/star-wars-model';

@Component({
  selector: 'app-star-wars-card',
  templateUrl: './star-wars-card.component.html',
  styleUrls: ['./star-wars-card.component.sass']
})
export class StarWarsCardComponent {

  @Input() character: Character | undefined;

}
