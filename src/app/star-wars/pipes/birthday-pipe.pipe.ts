import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdayPipe'
})
export class BirthdayPipePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .replace('BBY',' years Before Yavin battle')
      .replace('ABY',' years After Yavin battle')
      ;
  }

}
