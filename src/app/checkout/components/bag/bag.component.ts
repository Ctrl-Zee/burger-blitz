import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BagStore } from 'src/app/core/stores/bag.store';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagComponent implements OnInit {
  navComponent = CheckoutComponent;
  constructor(public bagStore: BagStore) {}

  ngOnInit() {}
}
