import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagBaseComponent } from './components/bag-base/bag-base.component';
import { BagPage } from './components/bag/bag.page';

const routes: Routes = [
  {
    path: '',
    component: BagBaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagPageRoutingModule {}
