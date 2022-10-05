import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPokemonType]'
})
export class PokemonTypeDirective {
  @Input() appPokemonType : string | undefined = '';
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    let color = 'black';
    switch(this.appPokemonType) {
      case 'grass':
        color = 'mediumseagreen';
        break;

      case 'fire':
        color = 'crimson';
        break;
      
      case 'water':
        color = 'cornflowerblue';
        break;

      case 'bug':
        color = 'darkslategrey';
        break;

      case 'normal':
        color = 'hotpink';
        break;

      case 'poison':
        color = 'darkorchid';
        break;

      case 'electric':
        color = 'orange';
        break;

      case 'ground':
        color = 'darkgoldenrod';
        break;

      case 'fairy':
        color = 'darkslateblue';
        break;

      case 'psychic':
        color = 'mediumvioletred';
        break;

      case 'fighting':
        color = 'darkcyan';
        break;

      case 'rock':
        color = 'darkgrey';
        break;

      case 'ghost':
        color = 'palevioletred';
        break;
        
    }
    this.el.nativeElement.style.backgroundColor = color;

  }

}
