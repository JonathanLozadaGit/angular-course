import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId'
})
export class PokemonIdPipe implements PipeTransform {

  transform(value: number): string {
    return '#' + value.toString().padStart(3,'0');
  }

}
