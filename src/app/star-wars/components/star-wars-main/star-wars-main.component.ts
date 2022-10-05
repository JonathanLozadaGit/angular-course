import { Component, OnInit } from '@angular/core';
import { StarwarsApiService } from '../../services/starwars-api.service';
import { Response, Character } from '../../models/star-wars-model'

@Component({
  selector: 'app-star-wars-main',
  templateUrl: './star-wars-main.component.html',
  styleUrls: ['./star-wars-main.component.sass']
})
export class StarWarsMainComponent implements OnInit {
  title = 'STAR WARS';
  characters : Character[] | undefined;

  constructor(private starwarsApiService : StarwarsApiService) { }

  ngOnInit(): void {
    this.starwarsApiService.getCharacters()
      .subscribe((data:Response) => {this.characters = data.results;})
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('star-wars');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('star-wars');
  }

}
