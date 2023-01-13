import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, Observable, tap } from 'rxjs';
import { MenuService } from '../core/services/menu.service';
import { MenuItem } from '../shared/models/menu-item';

export interface MenuItemState {
  menuItem: MenuItem | null;
}

@Injectable()
export class MenuItemStore extends ComponentStore<MenuItemState> {
  menuItem$ = this.select((state) => state.menuItem);

  constructor(private menuService: MenuService) {
    super({ menuItem: null });
  }

  readonly loadMenuItem = this.effect(($id: Observable<string>) => {
    return $id.pipe(
      switchMap((id) =>
        this.menuService.getItemById(id).pipe(
          tapResponse(
            (menuItem) => this.patchState({ menuItem }),
            (err) => console.log(err)
          )
        )
      )
    );
  });
}
