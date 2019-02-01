import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDDirective } from './input-d.directive';

import { InputWrapperContainerComponent } from '../input-wrapper-container';
import { InputWrapperContainerModule } from "../input-wrapper-container";


@NgModule({
  imports: [CommonModule, InputWrapperContainerModule ],
  declarations: [InputDDirective],
  exports: [InputDDirective],
  entryComponents: [InputWrapperContainerComponent]
})
export class InputDModule { }


