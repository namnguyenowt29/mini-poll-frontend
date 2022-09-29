import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { CreatePollComponent } from './create-poll.component';

@NgModule({
  declarations: [CreatePollComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreatePollComponent,
      },
    ]),
  ],
})
export class CreatePollModule {}
