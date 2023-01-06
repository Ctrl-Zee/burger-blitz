import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Credentials } from 'src/app/shared/models/credentials';
import { LoginStatus } from 'src/app/shared/models/types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Input() loginStatus!: LoginStatus;
  @Output() login = new EventEmitter<Credentials>();

  loginForm = this.fb.nonNullable.group({
    email: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder) {}

  protected onSubmit() {
    this.login.emit(this.loginForm.getRawValue());
  }
}
