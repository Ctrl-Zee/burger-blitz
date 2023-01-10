import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent implements OnInit {
  @Input() items!: MenuItem[];
  @Output() menuItemDetailEvent = new EventEmitter<MenuItem>();

  constructor() {}

  ngOnInit() {}

  viewMenuItemDetail(menuItem: MenuItem): void {
    this.menuItemDetailEvent.emit(menuItem);
  }
}
