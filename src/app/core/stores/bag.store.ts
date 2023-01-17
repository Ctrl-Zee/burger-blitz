import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { StorageService } from '../services/storage.service';
import { Guid } from 'guid-typescript';
export interface BagState {
  items: MenuItem[];
  itemsPrice: number;
  totalPrice: number;
  numberOfItems: number;
  tax: number;
  tip: number;
}

@Injectable({
  providedIn: 'root',
})
export class BagStore extends ComponentStore<BagState> {
  bag$ = this.select((state) => state);
  bagItems$ = this.select((state) => state.items);
  itemsPrice$ = this.select((state) => state.totalPrice);
  totalPrice$ = this.select((state) => state.totalPrice);
  numberOfItems$ = this.select((state) => state.numberOfItems);

  constructor(private storageService: StorageService) {
    super({
      items: [],
      totalPrice: 0,
      itemsPrice: 0,
      numberOfItems: 0,
      tax: 0.07,
      tip: 4,
    });
  }

  addItemToBag(item: MenuItem): void {
    this.setState((state) => {
      const newItems = [
        ...state.items,
        { ...item, bagId: Guid.create().toString() },
      ];
      this.storageService.updateBag(newItems);
      return this.setBagState(state, newItems);
    });
  }

  removeItemFromBag(item: MenuItem): void {
    this.setState((state) => {
      const newItems = state.items.filter((i) => i.bagId !== item.bagId);
      this.storageService.updateBag(newItems);
      return this.setBagState(state, newItems);
    });
  }

  removeAllFromBag(): void {
    this.setState((state) => {
      this.storageService.updateBag([]);
      return this.setBagState(state, []);
    });
  }

  private setBagState(state: BagState, items: MenuItem[]): BagState {
    const itemsPrice = this.calculateItemsPrice(items);
    const tax = this.calculateTax(itemsPrice, state.tax);
    return {
      ...state,
      items: items,
      numberOfItems: items.length,
      totalPrice: itemsPrice + tax + state.tip,
      itemsPrice: itemsPrice,
      tax: tax,
    };
  }

  private calculateItemsPrice(items: MenuItem[]): number {
    return items.reduce(
      (accumulator: number, currentItem: MenuItem) =>
        accumulator + currentItem.price,
      0
    );
  }

  private calculateTax(totalPrice: number, tax: number): number {
    const value = (totalPrice * tax).toFixed(2);
    console.log(value);
    return Number(value);
  }

  /**
   * Called  in AppComponent when the app is initialized to get saved bag item.
   */
  readonly initBag = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.storageService.loadBag().pipe(
          tapResponse(
            (items) =>
              this.setState((state) => {
                return this.setBagState(state, items);
              }),
            (err) => console.log(err)
          )
        )
      )
    )
  );
}
