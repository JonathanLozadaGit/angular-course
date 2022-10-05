import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RmMainComponent } from './components/rm-main/rm-main.component';

const routes: Routes = [
  {path: '', component: RmMainComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickAndMortyRoutingModule { }
