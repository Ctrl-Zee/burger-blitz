import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';
import { HistoryPage } from './components/history/history.page';
import { HistoryBaseComponent } from './components/history-base/history-base.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HistoryPageRoutingModule],
  declarations: [HistoryBaseComponent, HistoryPage, OrderComponent],
})
export class HistoryPageModule {}
