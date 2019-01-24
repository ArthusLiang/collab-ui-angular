import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { SpinnerModule } from '../spinner';



@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule, SpinnerModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
