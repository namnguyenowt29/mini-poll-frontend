import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() openModal = false;
  @Input() title: string | undefined = "";
  @Input() submitText = "OK";
  @Input() cancelText = "Cancel";
  @Input() width = "auto";
  @Input() hideCancelBtn = false;
  @Input() hideSubmitBtn = false;

  @Output() onSubmit = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  handleOk(): void {
    this.onSubmit.emit(false);
  }

  handleCancel(): void {
    this.onCancel.emit(false)
  }
}
