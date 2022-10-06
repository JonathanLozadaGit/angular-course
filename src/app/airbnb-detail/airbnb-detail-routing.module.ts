import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './component/detail-view/detail-view.component';

const routes: Routes = [
  {path: '', component: DetailViewComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirbnbDetailRoutingModule { }
