import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { combineLatest, map, take, tap } from 'rxjs';
import { BagStore } from 'src/app/core/stores/bag.store';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { MenuItemStore } from '../../menu-item.store';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.page.html',
  styleUrls: ['./menu-item.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuItemStore],
})
export class MenuItemPage implements OnInit {
  vm$ = combineLatest([this.menuItemstore.menuItem$]).pipe(
    map(([menuItem]) => ({
      menuItem,
    }))
  );

  constructor(
    private menuItemstore: MenuItemStore,
    private route: ActivatedRoute,
    private bagStore: BagStore,
    private navController: NavController
  ) {}

  ngOnInit() {
    // take the first param value, load menu item, then unsubscrive
    this.route.paramMap
      .pipe(
        take(1),
        tap((id) => this.menuItemstore.loadMenuItem(id.get('id') ?? ''))
      )
      .subscribe();
  }

  addToBag(item: MenuItem | null): void {
    if (item) {
      this.bagStore.addItemToBag(item);
      //redirect to menu
      this.navController.navigateBack('/');
      //open modal - set prop on bag store
      // this.bagStore.setbagModalOpen(true);
    }
  }
}
