import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalSimpleComponent } from './components/modal-simple/modal-simple.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalSimpleComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzModalModule,
    ReactiveFormsModule,
  ],
  exports: [CommonModule, ModalComponent, ModalSimpleComponent],
})
export class SharedModule { }
