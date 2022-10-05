import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { CreateRoutingModule } from './create-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [CreatePageComponent],
  imports: [
    SharedModule,
    CreateRoutingModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
  ],
})
export class CreateModule {}
