import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLogin implements CanActivate {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  canActivate() {
    return this.authService.user$.pipe(
      map((user) => (user ? false : true)),
      tap((canActivate) => {
        if (!canActivate) {
          this.navCtrl.navigateForward('/home/menu');
        }
      })
    );
  }
}
