import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  declarations: [ResultPageComponent],
  imports: [
    SharedModule,
    ResultRoutingModule,
    NzProgressModule,
    NzTableModule
  ],
})
export class ResultModule { }
