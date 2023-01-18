import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs';
import { OrderHistoryService } from '../core/services/order-history.service';
import { Order } from '../shared/models/order';

export interface MenuState {
  orders: Order[];
}

@Injectable()
export class HistoryStore extends ComponentStore<MenuState> {
  orders$ = this.select((state) => state.orders);

  constructor(private orderHistory: OrderHistoryService) {
    super({ orders: [] });
  }

  readonly loadOrders = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.orderHistory.getOrderHistory().pipe(
          tapResponse(
            (orders) => {
              this.patchState({ orders });
            },
            (err) => console.log(err)
          )
        )
      )
    )
  );
}
