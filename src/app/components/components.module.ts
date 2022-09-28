import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  imports: [NzLayoutModule, NzTypographyModule],
  exports: [NzLayoutModule, NzTypographyModule],
})
export class ComponentsModule {}
