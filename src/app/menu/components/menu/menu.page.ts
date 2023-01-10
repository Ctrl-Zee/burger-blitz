import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { combineLatest, map } from 'rxjs';
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
  vm$ = combineLatest([this.store.menuItems$]).pipe(
    map(([menuItems]) => ({
      menuItems,
    }))
  );

  constructor(public store: MenuStore, private navController: NavController) {}

  ngOnInit() {
    this.store.loadMenu();
  }

  onMenuItemDetailClick(menuItem: MenuItem): void {
    this.navController.navigateForward(`/menu-item/${menuItem.id}`);
  }
}
