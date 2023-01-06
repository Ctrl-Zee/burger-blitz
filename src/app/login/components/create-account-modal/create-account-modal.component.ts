import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { combineLatest, map } from 'rxjs';
import { LoginStore } from '../../login.store';

@Component({
  selector: 'app-create-account-modal',
  templateUrl: './create-account-modal.component.html',
  styleUrls: ['./create-account-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountModalComponent {
  vm$ = combineLatest([this.store.createStatus$]).pipe(
    map(([status]) => ({ status }))
  );
  constructor(public store: LoginStore, protected modalCtrl: ModalController) {}
}
