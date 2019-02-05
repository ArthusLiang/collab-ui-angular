import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from '../label';
import { InputErrorModule } from '../input-error'
import { InputHelperModule } from '../input-helper'
import { InputWrapperContainerComponent } from './input-wrapper-container.component';

import { InputDModule } from '../input-d'

import { FormsModule } from '@angular/forms'; //TODO: Remove

// import { InputDDirective } from '../input-d'

@NgModule({
  declarations: [InputWrapperContainerComponent],
  imports: [
    CommonModule,
    LabelModule,
    InputHelperModule,
    InputErrorModule,
    FormsModule //Remove
  ],
  exports: [InputWrapperContainerComponent],
})
export class InputWrapperContainerModule { }
