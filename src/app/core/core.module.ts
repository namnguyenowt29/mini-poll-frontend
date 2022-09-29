import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkingInterceptor } from 'app/shared/networking-interceptor.service';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { LoadingService } from './services/loading.service';
import { NgModule } from '@angular/core';

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
