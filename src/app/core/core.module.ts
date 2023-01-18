import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './services/menu.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { BagStore } from './stores/bag.store';
import { StorageService } from './services/storage.service';
import { OrderHistoryService } from './services/order-history.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    MenuService,
    AuthService,
    BagStore,
    StorageService,
    OrderHistoryService,
  ],
})
export class CoreModule {}
