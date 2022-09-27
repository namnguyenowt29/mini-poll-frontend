import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
