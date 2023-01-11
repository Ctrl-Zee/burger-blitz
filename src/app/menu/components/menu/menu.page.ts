import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { combineLatest, map } from 'rxjs';
import { BagStore } from 'src/app/core/stores/bag.store';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { MenuStore } from '../../../menu/menu.store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuStore],
})
export class MenuPage implements OnInit {
  vm$ = combineLatest([this.menuStore.menuItems$, this.bagStore.bag$]).pipe(
    map(([menuItems, bag]) => ({
      menuItems,
      bag,
    }))
  );

  constructor(
    public menuStore: MenuStore,
    public bagStore: BagStore,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.menuStore.loadMenu();
  }

  onMenuItemDetailClick(menuItem: MenuItem): void {
    this.navController.navigateForward(`/menu-item/${menuItem.id}`);
  }
}
