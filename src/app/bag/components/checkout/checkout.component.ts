import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';
import { BagStore } from 'src/app/core/stores/bag.store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  bag$ = this.bagStore.bag$;

  constructor(
    private nav: IonNav,
    private navCtrl: NavController,
    private bagStore: BagStore
  ) {}

  ngOnInit() {}

  navigateBack(): void {
    // ion-nav-link doesn't seem know about the component stack. Im using the IonNav methods instead.
    this.nav.pop();
  }

  checkout(): void {
    this.navCtrl.navigateRoot('/home/menu');
    this.bagStore.removeAllFromBag();
  }
}
