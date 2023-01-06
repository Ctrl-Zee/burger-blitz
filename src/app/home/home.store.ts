import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class HomeStore extends ComponentStore<any> {
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

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    super({});
  }
}
