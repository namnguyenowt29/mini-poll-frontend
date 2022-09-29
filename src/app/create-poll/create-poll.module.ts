import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CreatePollRoutingModule } from './create-poll-routing.module';
import { CreatePollComponent } from './create-poll.component';

@NgModule({
  declarations: [CreatePollComponent],
  imports: [SharedModule, CreatePollRoutingModule],
})
export class CreatePollModule {}
