import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './components/menu/menu.page';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { TextEllipsisPipeModule } from '../shared/pipes/text-ellipsis.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    TextEllipsisPipeModule,
  ],
  declarations: [MenuPage, MenuListComponent],
})
export class MenuPageModule {}
