import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)},
  {path: 'star-wars', loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule)},
  {path: 'rick-and-morty', loadChildren: () => import('./rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)},
  {path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)},
  {path: 'pokemon/:id', loadChildren: () => import('./pokemon/pokemon-detail.module').then(m => m.PokemonDetailModule)},
  {path: 'contact-form', loadChildren: () => import('./contact-form/contact-form.module').then(m => m.ContactFormModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
