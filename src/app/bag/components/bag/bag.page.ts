import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AlertController, IonNav } from '@ionic/angular';
import { combineLatest, map } from 'rxjs';
import { BagStore } from 'src/app/core/stores/bag.store';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.page.html',
  styleUrls: ['./bag.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagPage implements OnInit {
  vm$ = combineLatest([
    this.bagStore.bagItems$,
    this.bagStore.itemsPrice$,
    this.bagStore.numberOfItems$,
  ]).pipe(
    map(([items, itemsPrice, numberOfItems]) => ({
      items,
      itemsPrice,
      numberOfItems,
    }))
  );

  checkoutComponent = CheckoutComponent;

  constructor(
    protected bagStore: BagStore,
    private alertController: AlertController,
    private nav: IonNav
  ) {}

  ngOnInit() {}

  deleteItem(item: MenuItem): void {
    this.bagStore.removeItemFromBag(item);
  }

  deleteAll(): void {
    this.bagStore.removeAllFromBag();
  }

  async presentDeleteAllAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Clear Bag',
      subHeader: 'Are you sure you want to clear your bag?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Clear',
          role: 'confirm',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.deleteAll();
          },
        },
      ],
    });

    await alert.present();
  }

  goToCheckout() {
    this.nav.push(this.checkoutComponent);
  }
}
