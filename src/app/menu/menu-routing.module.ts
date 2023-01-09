import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './components/menu/menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
