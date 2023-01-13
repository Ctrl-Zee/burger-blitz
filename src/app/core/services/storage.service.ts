import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from, Observable } from 'rxjs';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { MenuItem } from 'src/app/shared/models/menu-item';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  #hasLoaded = false;
  storage$ = from(this.ionicStorage.create()).pipe(shareReplay(1));

  constructor(private ionicStorage: Storage) {}

  updateBag(items: MenuItem[]) {
    if (this.#hasLoaded) {
      this.storage$.pipe(take(1)).subscribe((storage) => {
        storage.set('bag', items);
      });
    }
  }

  loadBag(): Observable<MenuItem[]> {
    return this.storage$.pipe(
      switchMap((storage) => from(storage.get('bag'))),
      map((items) => items ?? []),
      tap(() => (this.#hasLoaded = true))
    );
  }
}
