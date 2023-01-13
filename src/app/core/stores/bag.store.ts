import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { StorageService } from '../services/storage.service';
import { Guid } from 'guid-typescript';
export interface BagState {
  items: MenuItem[];
  totalPrice: number;
  numberOfItems: number;
}

@Injectable({
  providedIn: 'root',
})
export class BagStore extends ComponentStore<BagState> {
  bag$ = this.select((state) => state);
  bagItems$ = this.select((state) => state.items);
  totalPrice$ = this.select((state) => state.totalPrice);
  numberOfItems$ = this.select((state) => state.numberOfItems);

  constructor(private storageService: StorageService) {
    super({
      items: [],
      totalPrice: 0,
      numberOfItems: 0,
    });
  }

  addItemToBag(item: MenuItem): void {
    this.setState((state) => {
      const newItems = [
        ...state.items,
        { ...item, bagId: Guid.create().toString() },
      ];
      this.storageService.updateBag(newItems);
      return {
        ...state,
        items: newItems,
        numberOfItems: newItems.length,
        totalPrice: this.calculateTotalPrice(newItems),
      };
    });
  }

  removeItemFromBag(item: MenuItem): void {
    this.setState((state) => {
      const newItems = state.items.filter((i) => i.bagId !== item.bagId);
      this.storageService.updateBag(newItems);
      return {
        ...state,
        items: newItems,
        numberOfItems: newItems.length,
        totalPrice: this.calculateTotalPrice(newItems),
      };
    });
  }

  private calculateTotalPrice(items: MenuItem[]): number {
    return items.reduce(
      (accumulator: number, currentItem: MenuItem) =>
        accumulator + currentItem.price,
      0
    );
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
                return {
                  ...state,
                  items: items,
                  numberOfItems: items.length,
                  totalPrice: this.calculateTotalPrice(items),
                };
              }),
            (err) => console.log(err)
          )
        )
      )
    )
  );
}
