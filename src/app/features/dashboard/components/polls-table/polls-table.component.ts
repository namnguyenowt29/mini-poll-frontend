import { Component, OnInit } from '@angular/core';
import { dummyDashboardList } from '../../configs/dummy';

@Component({
  selector: 'polls-table',
  templateUrl: './polls-table.component.html',
  styleUrls: ['./polls-table.component.scss'],
})
export class PollsTableComponent implements OnInit {
  listOfData = dummyDashboardList;

  constructor() {}
  ngOnInit(): void {}
}
