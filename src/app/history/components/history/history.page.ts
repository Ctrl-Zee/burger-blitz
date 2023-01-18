import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { Order } from 'src/app/shared/models/order';
import { HistoryStore } from '../../history.store';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HistoryStore],
})
export class HistoryPage implements OnInit {
  orders$ = this.historyStore.orders$;
  orderComponent = OrderComponent;

  constructor(private historyStore: HistoryStore, private nav: IonNav) {}

  ngOnInit() {
    this.historyStore.loadOrders();
  }

  goToOrderDetail(order: Order): void {
    this.nav.push(this.orderComponent, { order: order });
  }
}
