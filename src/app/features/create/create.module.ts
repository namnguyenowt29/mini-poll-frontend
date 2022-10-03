import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { CreateRoutingModule } from './create-routing.module';

@NgModule({
  declarations: [CreatePageComponent],
  imports: [SharedModule, CreateRoutingModule],
})
export class CreateModule {}
