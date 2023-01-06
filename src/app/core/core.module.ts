import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './services/menu.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [MenuService, AuthService],
})
export class CoreModule {}
