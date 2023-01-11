import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBaseComponent } from './components/modal-base/modal-base.component';
import { BagComponent } from './components/bag/bag.component';
import { IonicModule } from '@ionic/angular';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [ModalBaseComponent, BagComponent, CheckoutComponent],
  imports: [CommonModule, IonicModule],
  exports: [ModalBaseComponent, BagComponent, CheckoutComponent],
})
export class CheckoutModule {}
