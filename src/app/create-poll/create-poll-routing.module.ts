import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePollComponent } from './create-poll.component';

const createPollRoutes: Routes = [
  {
    path: '',
    component: CreatePollComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(createPollRoutes)],
  exports: [RouterModule],
})
export class CreatePollRoutingModule {}
