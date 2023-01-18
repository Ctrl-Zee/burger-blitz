import { Timestamp } from '@angular/fire/firestore';
import { MenuItem } from './menu-item';
import { OrderBase } from './order-base';

/**
 * Due to the way we upload orders the order-history collection has
 * documents that contain an id and an order object.
 */
export interface OrderDocument {
  id: string;
  order: OrderResponse;
}

/**
 * Firebase saves dates as timestamps.
 * The data returned from the documents in order-history will be a timestmp.
 * To ensure type safety we created an OrderResponse. This cam be mapped to an order.
 */
interface OrderResponse extends OrderBase {
  orderDate: Timestamp;
}
