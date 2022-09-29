import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CreatePollComponent } from './create-poll.component';
import { CreatePollRoutingModule } from './create-poll.routing.modules';

@NgModule({
  declarations: [CreatePollComponent],
  imports: [
    SharedModule,
    CreatePollRoutingModule
  ],
})
export class CreatePollModule { }
