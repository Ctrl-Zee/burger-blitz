import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, take, tap } from 'rxjs';
import { MenuItemStore } from '../../menu-item.store';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.page.html',
  styleUrls: ['./menu-item.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuItemStore],
})
export class MenuItemPage implements OnInit {
  vm$ = combineLatest([this.store.menuItem$]).pipe(
    map(([menuItem]) => ({
      menuItem,
    }))
  );

  constructor(private store: MenuItemStore, private route: ActivatedRoute) {}

  ngOnInit() {
    // take the first param value, load menu item, then unsubscrive
    this.route.paramMap
      .pipe(
        take(1),
        tap((id) => this.store.loadMenuItem(id.get('id') ?? ''))
      )
      .subscribe();
  }
}
