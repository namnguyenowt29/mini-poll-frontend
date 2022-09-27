import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreatePollModule } from './create-poll/create-poll.module';
import { PollDetailModule } from './poll-detail/poll-detail.module';
import en from '@angular/common/locales/en';
import { LayoutModule } from './layout/layout.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    CoreModule,
    AuthModule,
    SharedModule,
    DashboardModule,
    CreatePollModule,
    PollDetailModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
