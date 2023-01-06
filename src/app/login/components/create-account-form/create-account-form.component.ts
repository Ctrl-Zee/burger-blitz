import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Credentials } from 'src/app/shared/models/credentials';
import { CreateStatus } from '../create-account-modal/create-account-modal.component';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountFormComponent {
  @Input() createStatus!: CreateStatus;
  @Output() create = new EventEmitter<Credentials>();

  createForm = this.fb.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.createForm.valid) {
      const { confirmPassword, ...credentials } = this.createForm.getRawValue();
      this.create.emit(credentials);
    }
  }
}
