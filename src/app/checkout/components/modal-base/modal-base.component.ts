import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BagComponent } from '../bag/bag.component';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
})
export class ModalBaseComponent {
  navComponent = BagComponent;
}
