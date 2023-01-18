import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';
import { OrderHistoryService } from 'src/app/core/services/order-history.service';
import { BagState, BagStore } from 'src/app/core/stores/bag.store';
import { Order } from 'src/app/shared/models/order';

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
    private bagStore: BagStore,
    private orderHistory: OrderHistoryService
  ) {}

  ngOnInit() {}

  navigateBack(): void {
    // ion-nav-link doesn't seem know about the component stack. Im using the IonNav methods instead.
    this.nav.pop();
  }

  checkout(bag: BagState): void {
    const order: Order = {
      id: Date.now().toString(),
      items: bag.items,
      itemsPrice: bag.itemsPrice,
      totalPrice: bag.totalPrice,
      tax: bag.tax,
      tip: bag.tip,
      orderDate: new Date(),
    };
    this.orderHistory.saveOrderHistory(order);
    this.navCtrl.navigateRoot('/home/menu');
    this.bagStore.removeAllFromBag();
  }
}
