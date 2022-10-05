import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsMainComponent } from './components/star-wars-main/star-wars-main.component';
import { StarWarsCardComponent } from './components/star-wars-card/star-wars-card.component';
import { BirthdayPipePipe } from './pipes/birthday-pipe.pipe';
import { HeightDirective } from './directives/height.directive';
import { StarWarsRoutingModule } from './star-wars-routing.module';


@NgModule({
  declarations: [
    StarWarsMainComponent,
    StarWarsCardComponent,
    BirthdayPipePipe,
    HeightDirective
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule,
  ]
})
export class StarWarsModule { }
