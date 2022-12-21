import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrowsePageRoutingModule } from './browse-routing.module';

import { BrowsePage } from './browse.page';
import { MenuListComponent } from './ui/menu-list/menu-list.component';
import { CoreModule } from '../core/core.module';
import { TextEllipsisPipeModule } from '../shared/pipes/text-ellipsis.pipe';

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
