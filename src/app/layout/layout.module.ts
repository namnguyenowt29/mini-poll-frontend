import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from 'app/icons-provider.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    SharedModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    IconsProviderModule,
  ],
})
export class LayoutModule {}
