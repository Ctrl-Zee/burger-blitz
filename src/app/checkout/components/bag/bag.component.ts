import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { BagStore } from 'src/app/core/stores/bag.store';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagComponent implements OnInit {
  checkoutComponent = CheckoutComponent;
  constructor(public bagStore: BagStore, private nav: IonNav) {}

  ngOnInit() {}

  /**
   *  For some reason I can't figure out router-direction="forward" doesn't work in the template.
   *  Navigating forwards only works when written programatically.
   */
  navigateToCheckout() {
    this.nav.push(this.checkoutComponent);
  }
}
