import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  collectionSnapshots,
  doc,
  Firestore,
  query,
  setDoc,
  Timestamp,
} from '@angular/fire/firestore';
import { time } from 'console';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrderDocument } from 'src/app/shared/models/order-document';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  constructor(private firestore: Firestore) {}

  saveOrderHistory(order: Order): void {
    setDoc(doc(this.firestore, 'order-history', order.id), {
      order: order,
    });
  }

  getOrderHistory(): Observable<Order[]> {
    const fbCollection = collection(this.firestore, 'order-history');
    return collectionSnapshots(fbCollection).pipe(
      map((snapshots) =>
        snapshots.map((snapshot) => {
          const orderDoc = {
            ...snapshot.data(),
            id: snapshot.id,
          } as OrderDocument;
          const order: Order = {
            ...orderDoc.order,
            orderDate: orderDoc.order.orderDate.toDate(),
          };
          return order;
        })
      )
    );
  }
}
