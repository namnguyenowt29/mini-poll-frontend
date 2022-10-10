import { SharedModule } from './../shared/shared.module';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { HeaderComponent } from './components/header/header.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { LoadingService } from './services/loading.service';
import { NetworkingInterceptor } from './services/networking-interceptor.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkingInterceptor,
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US, multi: true },
    LoadingService,
  ],
  declarations: [HeaderComponent, ToastMessageComponent, UserMenuComponent],
  exports: [HeaderComponent],
  imports: [
    NzTypographyModule,
    NzButtonModule,
    NzAvatarModule,
    NzDropDownModule,
    NzIconModule,
    SharedModule,
    NzUploadModule,
  ],
})
export class CoreModule {}
