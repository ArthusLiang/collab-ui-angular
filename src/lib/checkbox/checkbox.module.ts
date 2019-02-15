import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from '../label';
import { InputHelperModule } from '../input-helper'

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    LabelModule,
    InputHelperModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
