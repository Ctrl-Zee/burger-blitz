import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  doc,
  docData,
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

  getItemById(docId: string): Observable<MenuItem> {
    const docRef = doc(this.firestore, 'menu-items', docId);

    return docData(docRef, { idField: 'id' }).pipe() as Observable<MenuItem>;
  }
}
