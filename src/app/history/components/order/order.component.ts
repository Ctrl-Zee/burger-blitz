import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';
import { Order } from 'src/app/shared/models/order';
import { HistoryStore } from '../../history.store';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [HistoryStore],
})
export class OrderComponent implements OnInit {
  order!: Order;

  constructor(
    private nav: IonNav,
    private historyStore: HistoryStore,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.order = this.navParams.get('order');
  }

  navigateBack(): void {
    this.nav.pop();
  }
}
