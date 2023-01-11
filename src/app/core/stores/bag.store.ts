import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { MenuItem } from 'src/app/shared/models/menu-item';

export interface BagState {
  items: MenuItem[];
  totalPrice: number;
  numberOfItems: number;
  bagModalIsOpen: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BagStore extends ComponentStore<BagState> {
  bag$ = this.select((state) => state);
  bagModalIsOpen$ = this.select((state) => state.bagModalIsOpen);
  // bagItems$ = this.select((state) => state.items);
  // totalPrice$ = this.select((state) => state.totalPrice);
  // numberOfItems$ = this.select((state) => state.numberOfItems);

  constructor() {
    super({
      items: [],
      totalPrice: 0,
      numberOfItems: 0,
      bagModalIsOpen: false,
    });
  }

  addItemToBag(item: MenuItem): void {
    this.setState((state) => {
      const newItems = [...state.items, item];
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
      const newItems = state.items.filter((i) => i.id === item.id);
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

  setbagModalOpen(isOpen: boolean) {
    this.patchState({ bagModalIsOpen: isOpen });
  }
}
