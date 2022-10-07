import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main/main.component';
import { CardComponent } from './component/card/card.component';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
  ]
})
export class MainModule { }
