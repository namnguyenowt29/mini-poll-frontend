import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
