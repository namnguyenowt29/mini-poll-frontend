import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dummyDashboardList } from '../../configs/dummy';
import { DashBoardType, PollStatus } from '../../models/dashboard.model';

@Component({
  selector: 'polls-table',
  templateUrl: './polls-table.component.html',
  styleUrls: ['./polls-table.component.scss'],
})
export class PollsTableComponent implements OnInit {
  public PollStatusEnum = PollStatus
  listOfData = dummyDashboardList;
  isOpenedDetail = false;
  currentPoll: DashBoardType | undefined

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void { }

  selectPoll(pollSelected: DashBoardType) {
    if (pollSelected.status.pollStatus === PollStatus.START || pollSelected.status.pollStatus === PollStatus.DRAFT) {
      this.showDetail()
    }
    else {
      this.router.navigate(['../result'], { relativeTo: this.route })
    }
    this.currentPoll = pollSelected
  }

  showDetail() {
    this.isOpenedDetail = true;
  }

  handleCancelModal(data: boolean) {
    this.isOpenedDetail = data;
  }

}
