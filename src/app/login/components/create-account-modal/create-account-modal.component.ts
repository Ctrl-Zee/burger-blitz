import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Credentials } from 'src/app/shared/models/credentials';

export type CreateStatus = 'pending' | 'creating' | 'success' | 'error';

@Component({
  selector: 'app-create-account-modal',
  templateUrl: './create-account-modal.component.html',
  styleUrls: ['./create-account-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountModalComponent {
  createStatus$ = new BehaviorSubject<CreateStatus>('pending'); // TODO: refactor to use component store

  constructor(
    protected authService: AuthService,
    protected modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  async createAccount(credentials: Credentials) {
    this.createStatus$.next('creating');
    try {
      await this.authService.createAccount(credentials);
      this.createStatus$.next('success');
      this.modalCtrl.dismiss();
      this.navCtrl.navigateRoot('/home');
    } catch (err) {
      this.createStatus$.next('error');
    }
  }
}
