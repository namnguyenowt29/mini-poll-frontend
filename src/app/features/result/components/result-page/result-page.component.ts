import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  isOpenedModal = false
  // Mock Data
  pollTitle = 'Poll A'
  listOfVoters = [
    {
      id: '1',
      email: 'mockemail@gmail.com',
      votedTime: "2:15",
      date: '20/10/2022'
    },
    {
      id: '2',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '3',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '4',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '5',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '6',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '7',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '8',
      email: 'mockemail@gmail.com',
      votedTime: '2:15',
      date: '20/10/2022'
    }, {
      id: '9',
      email: 'mockemail@gmail.com',
      votedTime: '1:15',
      date: '20/10/2022'
    }, {
      id: '10',
      email: 'mockemail@gmail.com',
      votedTime: '2:32',
      date: '20/10/2022'
    },
  ];
  options = [
    { name: 'Option1', voterCounter: 3, percent: 30 },
    { name: 'Option2', voterCounter: 6, percent: 60 },
    { name: 'Option3', voterCounter: 1, percent: 10 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.isOpenedModal = true
  }

  handleCancelModal(data: boolean) {
    this.isOpenedModal = data
  }
}
