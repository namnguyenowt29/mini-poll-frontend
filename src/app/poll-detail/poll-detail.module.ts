import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { PollDetailComponent } from './poll-detail.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PollDetailComponent,
      },
    ]),
  ],
})
export class PollDetailModule {}
