import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {
  @Input() isOpen = false  // Mock Data

  @Output() onCancel = new EventEmitter<boolean>();

  openDeleteModal = false

  options = [
    { content: "op1" }, { content: "op2" }, { content: "op3" },
    { content: "op1" }, { content: "op2" }, { content: "op3" }
  ];
  invitees = [
    'abc@gmail.com', 'xyz@gmail.com', 'mock@gmail.com',
    'mock@gmail.com', 'mock@gmail.com', 'mock@gmail.com',
    'mock@gmail.com', 'mock@gmail.com', 'mock@gmail.com',
    'mock@gmail.com', 'mock@gmail.com', 'mock@gmail.com',
    'mock@gmail.com', 'mock@gmail.com', 'mock@gmail.com',
    'mock@gmail.com', 'mock@gmail.com', 'mock@gmail.com',
    'mock@gmail.com', 'mock@gmail.com', 'mock@gmail.com']

  constructor() { }

  ngOnInit(): void {
  }

  handleCancelModal(data: boolean) {
    this.isOpen = data
  }

  handleCancelDelete(data: boolean) {
    this.openDeleteModal = data
  }
}
