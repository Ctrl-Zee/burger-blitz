import { MenuItem } from './menu-item';

export interface OrderBase {
  id: string;
  items: MenuItem[];
  itemsPrice: number;
  totalPrice: number;
  tax: number;
  tip: number;
}
