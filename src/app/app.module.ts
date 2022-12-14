import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { CreateModule } from './features/create/create.module';
import { ResultModule } from './features/result/result.module';
import { AuthModule } from './features/auth/auth.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    NzLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    SharedModule,
    DashboardModule,
    CreateModule,
    ResultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
