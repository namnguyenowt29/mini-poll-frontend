import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },

  {
    path: 'create-poll',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: CreatePollComponent,
      },
    ],
  },
  {
    path: 'detail',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PollDetailComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
