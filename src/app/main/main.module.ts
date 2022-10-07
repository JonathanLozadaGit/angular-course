import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { CardComponent } from './component/card/card.component';
import { MainComponent } from './component/main/main.component';



@NgModule({
  declarations: [
    CardComponent,
    MainComponent,
  ],
  imports: [
    RouterModule,
    MainRoutingModule,
    CommonModule,
  ]
})
export class MainModule { }
