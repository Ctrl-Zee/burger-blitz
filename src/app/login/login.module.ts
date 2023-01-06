import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './components/login/login.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { CreateAccountModalComponent } from './components/create-account-modal/create-account-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginPage,
    LoginFormComponent,
    CreateAccountFormComponent,
    CreateAccountModalComponent,
  ],
})
export class LoginPageModule {}
