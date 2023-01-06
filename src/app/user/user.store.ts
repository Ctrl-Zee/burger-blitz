import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';

interface UserState {
  logOutModalIsOpen: boolean;
}

@Injectable()
export class UserStore extends ComponentStore<any> {
  logoutModalIsOpen$ = this.select((state) => state.logOutModalIsOpen);

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    super({ logOutModalIsOpen: false });
  }

  logout = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.authService.logout().pipe(
          tapResponse(
            () => this.navCtrl.navigateRoot('/login'),
            (err) => console.log(err)
          )
        )
      )
    )
  );

  setLogOutModalOpen(isOpen: boolean) {
    this.patchState({ logOutModalIsOpen: isOpen });
  }
}
