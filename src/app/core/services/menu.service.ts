import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item';
import { ApiParameter, ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  burgers$ = this.getBurgerItems();

  constructor(private apiService: ApiService) {}

  getBurgerItems(): Observable<MenuItem[]> {
    const params: ApiParameter[] = [{ key: 'select', value: '*' }];
    return this.apiService.doGet('menuitems', params);
  }
}
