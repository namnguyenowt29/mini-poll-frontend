import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollDetailComponent } from './poll-detail.component';

const pollDetailRoutes: Routes = [
  {
    path: '',
    component: PollDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(pollDetailRoutes)],
  exports: [RouterModule],
})
export class PollDetailRoutingModule {}
