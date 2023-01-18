import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryBaseComponent } from './components/history-base/history-base.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryBaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPageRoutingModule {}
