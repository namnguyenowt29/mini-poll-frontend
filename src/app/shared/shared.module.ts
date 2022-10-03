import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [ButtonComponent, TextFieldComponent],
  imports: [CommonModule, NzButtonModule, NzInputModule],
  exports: [CommonModule, ButtonComponent, TextFieldComponent],
})
export class SharedModule {}
