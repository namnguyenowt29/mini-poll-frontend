import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CreatePollComponent } from './create-poll.component';

@NgModule({
  declarations: [CreatePollComponent],
  imports: [SharedModule],
})
export class CreatePollModule {}
