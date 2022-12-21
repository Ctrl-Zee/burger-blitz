import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuService } from '../core/services/menu.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowsePage implements OnInit {
  items$ = this.menuService.burgers$;
  constructor(private menuService: MenuService) {}

  async ngOnInit() {
    // this.test = await this.menuService.getBurgerItems();
    // console.log(this.test);
  }
}
