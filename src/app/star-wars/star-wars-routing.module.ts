import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsMainComponent } from './components/star-wars-main/star-wars-main.component';

const routes: Routes = [
  {path: '', component: StarWarsMainComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule { }
