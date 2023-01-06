import { Injectable } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';
import { Credentials } from '../shared/models/credentials';
import { CreateStatus, LoginStatus } from '../shared/models/types';

interface LoginState {
  loginStatus: LoginStatus;
  createStatus: CreateStatus;
  createModalIsOpen: boolean;
}

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
  loginStatus$ = this.select((state) => state.loginStatus);
  createStatus$ = this.select((state) => state.createStatus);
  createModalIsOpen$ = this.select((state) => state.createModalIsOpen);

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    protected modalCtrl: ModalController
  ) {
    super({
      loginStatus: 'pending',
      createStatus: 'pending',
      createModalIsOpen: false,
    });
  }

  login = this.effect((credentials$: Observable<Credentials>) =>
    credentials$.pipe(
      tap(() => this.patchState({ loginStatus: 'authenticating' })),
      switchMap((credentials) =>
        this.authService.login(credentials).pipe(
          tapResponse(
            (user) => {
              this.patchState({ loginStatus: 'success' });
              this.navCtrl.navigateRoot('/home/browse');
            },
            (error) => this.patchState({ loginStatus: 'error' })
          )
        )
      )
    )
  );

  setCreateModalOpen(isOpen: boolean) {
    this.patchState({ createModalIsOpen: isOpen });
  }

  createAccount = this.effect((credential$: Observable<Credentials>) =>
    credential$.pipe(
      tap(() => this.patchState({ createStatus: 'creating' })),
      switchMap((credential) =>
        this.authService.createAccount(credential).pipe(
          tapResponse(
            (user) => {
              this.patchState({ createStatus: 'success' });
              this.modalCtrl.dismiss();
              this.navCtrl.navigateRoot('/home/browse');
            },
            (error) => this.patchState({ createStatus: 'error' })
          )
        )
      )
    )
  );
}
