import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ButtonComponent } from './components/button/button.component';
import { ModalSimpleComponent } from './components/modal-simple/modal-simple.component';
import { ModalComponent } from './components/modal/modal.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TextFieldComponent,
    ModalComponent,
    ModalSimpleComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzModalModule
  ],
  exports: [CommonModule, ButtonComponent, TextFieldComponent, ModalComponent, ModalSimpleComponent],
})
export class SharedModule { }
