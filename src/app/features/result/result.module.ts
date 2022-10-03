import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  declarations: [ResultPageComponent],
  imports: [SharedModule, ResultRoutingModule],
})
export class ResultModule {}
