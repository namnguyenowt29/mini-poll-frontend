import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { CreateRoutingModule } from './create-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CreatePollFormComponent } from './components/create-poll-form/create-poll-form.component';
import { SettingFormComponent } from './components/setting-form/setting-form.component';
import { CreatePollSerivce } from './services/create-poll.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreatePageComponent,
    CreatePollFormComponent,
    SettingFormComponent,
  ],
  providers: [CreatePollSerivce],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CreateRoutingModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzImageModule,
    NzModalModule,
    NzIconModule,
    NzAlertModule,
    RouterModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzSwitchModule,
  ],
})
export class CreateModule {}
