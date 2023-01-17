import { Component } from '@angular/core';
import { BagPage } from '../bag/bag.page';

@Component({
  selector: 'app-bag-base',
  templateUrl: './bag-base.component.html',
  styleUrls: ['./bag-base.component.scss'],
})
export class BagBaseComponent {
  bagComponent = BagPage;
}
