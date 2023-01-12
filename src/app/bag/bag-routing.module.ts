import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagPage } from './components/bag/bag.page';

const routes: Routes = [
  {
    path: '',
    component: BagPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagPageRoutingModule {}
