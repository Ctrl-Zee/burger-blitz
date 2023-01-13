export interface MenuItem {
  id: number;
  menuItemTypeId: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  ingredients: string[];
  bagId?: string;
}
