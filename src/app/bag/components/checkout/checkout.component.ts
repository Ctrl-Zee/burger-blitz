import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { BagStore } from 'src/app/core/stores/bag.store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  bag$ = this.bagStore.bag$;

  constructor(private nav: IonNav, private bagStore: BagStore) {}

  ngOnInit() {}

  navigateBack(): void {
    this.nav.pop();
  }
}
