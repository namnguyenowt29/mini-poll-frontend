import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  havePolls = true;
  isOpen = false
  constructor() { }
  ngOnInit(): void { }

  showModal() {
    this.isOpen = true
  }

  handleCancel(data: boolean) {
    this.isOpen = data
  }

  handleSubmit(data: boolean) {
    this.isOpen = data
  }
}
