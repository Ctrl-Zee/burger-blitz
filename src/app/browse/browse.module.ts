import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrowsePageRoutingModule } from './browse-routing.module';

import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CoreModule } from '../core/core.module';
import { TextEllipsisPipeModule } from '../shared/pipes/text-ellipsis.pipe';
import { BrowsePage } from './components/browse/browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsePageRoutingModule,
    CoreModule,
    TextEllipsisPipeModule,
  ],
  declarations: [BrowsePage, MenuListComponent],
})
export class BrowsePageModule {}
