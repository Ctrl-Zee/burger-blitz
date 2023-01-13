import { Component } from '@angular/core';
import { BagStore } from './core/stores/bag.store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private bagStore: BagStore) {}

  ngOnInit(): void {
    this.bagStore.initBag(); // load items that were in the bag when the app was closed.
  }
}
