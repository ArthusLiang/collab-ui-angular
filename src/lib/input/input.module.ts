import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { LabelModule } from '../label';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    LabelModule,
    FormsModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
