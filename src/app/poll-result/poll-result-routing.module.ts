import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollResultComponent } from './poll-result.component';

const pollDetailRoutes: Routes = [
  {
    path: '',
    component: PollResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(pollDetailRoutes)],
  exports: [RouterModule],
})
export class PollResultRoutingModule {}
