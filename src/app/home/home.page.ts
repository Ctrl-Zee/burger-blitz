import { Component } from '@angular/core';
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeStore],
})
export class HomePage {
  constructor(public store: HomeStore) {}
}
