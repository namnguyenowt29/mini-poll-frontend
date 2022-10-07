import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { CreatePollFormComponent } from './components/create-poll-form/create-poll-form.component';
import { SettingFormComponent } from './components/setting-form/setting-form.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePageComponent,
    children: [
      {
        path: 'step1',
        component: CreatePollFormComponent,
      },
      {
        path: 'step2',
        component: SettingFormComponent,
      },
    ],
  },
  { path: '', redirectTo: '/create-poll/step1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}
