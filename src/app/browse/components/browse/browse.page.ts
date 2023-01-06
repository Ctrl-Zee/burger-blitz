import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { MenuStore } from '../../menu.store';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuStore],
})
export class BrowsePage implements OnInit {
  vm$ = combineLatest([this.store.menuItems$]).pipe(
    map(([menuItems]) => ({ menuItems }))
  );

  constructor(public store: MenuStore) {}

  ngOnInit() {
    this.store.loadMenu();
  }
}
