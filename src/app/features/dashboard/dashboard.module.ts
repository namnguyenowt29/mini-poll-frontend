import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PollsTableComponent } from './components/polls-table/polls-table.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    DashboardPageComponent,
    PollsTableComponent,
    PollDetailComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    NzTypographyModule,
    NzTableModule,
    NzButtonModule,
    NzPaginationModule,
    NzInputModule,
    NzIconModule,
    NzLayoutModule,
    NzRadioModule
  ],
})
export class DashboardModule { }
