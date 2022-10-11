import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-simple',
  templateUrl: './modal-simple.component.html',
  styleUrls: ['./modal-simple.component.scss']
})
export class ModalSimpleComponent implements OnInit {
  @Input() openModal = false;
  @Input() title = "";
  @Input() submitText = "OK";
  @Input() cancelText = "Cancel";
  @Input() width = "auto";

  @Output() onCloseModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCloseModal(): void {
    this.onCloseModal.emit(false)
  }
}
