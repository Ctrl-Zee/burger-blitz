import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { BagStore } from 'src/app/core/stores/bag.store';
import { MenuItem } from 'src/app/shared/models/menu-item';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.page.html',
  styleUrls: ['./bag.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagPage implements OnInit {
  vm$ = combineLatest([
    this.bagStore.bagItems$,
    this.bagStore.totalPrice$,
    this.bagStore.numberOfItems$,
  ]).pipe(
    map(([items, totalPrice, numberOfItems]) => ({
      items,
      totalPrice,
      numberOfItems,
    }))
  );

  constructor(protected bagStore: BagStore) {}

  ngOnInit() {}

  deleteItem(item: MenuItem): void {}
}
