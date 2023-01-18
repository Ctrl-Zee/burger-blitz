import { OrderBase } from './order-base';

export interface Order extends OrderBase {
  orderDate: Date;
}
