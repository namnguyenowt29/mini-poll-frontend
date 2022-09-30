import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { LoadingService } from './services/loading.service';
import { NgModule } from '@angular/core';
import { NetworkingInterceptor } from './services/networking-interceptor.service';

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
})
export class CoreModule {}
