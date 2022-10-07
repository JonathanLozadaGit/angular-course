import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CardComponent } from './component/card/card.component';
import { MainComponent } from './component/main/main.component';



@NgModule({
  declarations: [
    CardComponent,
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
  ]
})
export class MainModule { }
