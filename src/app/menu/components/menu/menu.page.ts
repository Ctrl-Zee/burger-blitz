import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { MenuStore } from '../../../menu/menu.store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuStore],
})
export class MenuPage implements OnInit {
  vm$ = combineLatest([this.store.menuItems$]).pipe(
    map(([menuItems]) => ({ menuItems }))
  );

  constructor(public store: MenuStore) {}

  ngOnInit() {
    this.store.loadMenu();
  }
}
