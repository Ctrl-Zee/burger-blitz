import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  limit,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private firestore: Firestore) {}

  getMenu(): Observable<MenuItem[]> {
    const menuCollection = query(collection(this.firestore, 'menu-items'));

    return collectionData(menuCollection, {
      idField: 'id',
    }).pipe() as Observable<MenuItem[]>;
  }
}
