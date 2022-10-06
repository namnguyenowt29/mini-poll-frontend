import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRegisterPageComponent } from './components/login-register-page/login-register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const authRoutes: Routes = [
  {
    path: '',
    component: LoginRegisterPageComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
