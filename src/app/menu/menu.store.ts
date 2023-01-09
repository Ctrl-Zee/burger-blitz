import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs';
import { MenuService } from '../core/services/menu.service';
import { MenuItem } from '../shared/models/menu-item';

export interface MenuState {
  menu: MenuItem[];
}

@Injectable()
export class MenuStore extends ComponentStore<MenuState> {
  menuItems$ = this.select((state) => state.menu);

  loadMenu = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.menuService.getMenu().pipe(
          tapResponse(
            (menu) => this.patchState({ menu }),
            (err) => console.log(err)
          )
        )
      )
    )
  );

  constructor(private menuService: MenuService) {
    super({ menu: [] });
  }
}
