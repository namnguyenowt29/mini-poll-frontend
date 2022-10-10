import { Component, OnInit } from '@angular/core';
import { CreatePollSerivce } from 'app/features/create/services/create-poll.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  havePolls = true;

  constructor(private createService: CreatePollSerivce) {}
  ngOnInit(): void {
    this.createService.createPollValue$.asObservable().subscribe((data) => {
      console.log(data);
    });
  }
}
