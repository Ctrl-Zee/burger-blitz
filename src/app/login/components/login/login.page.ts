import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { combineLatest, map } from 'rxjs';
import { LoginStore } from '../../login.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginStore],
})
export class LoginPage {
  vm$ = combineLatest([this.store.status$, this.store.createModalIsOpen$]).pipe(
    map(([status, createModalIsOpen]) => ({ status, createModalIsOpen }))
  );

  constructor(
    public store: LoginStore,
    protected routerOutlet: IonRouterOutlet
  ) {}
}
