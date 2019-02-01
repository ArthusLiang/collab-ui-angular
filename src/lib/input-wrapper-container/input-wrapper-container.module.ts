import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWrapperContainerComponent } from './input-wrapper-container.component';

import { InputDModule } from '../input-d'

// import { InputDDirective } from '../input-d'

@NgModule({
  declarations: [InputWrapperContainerComponent],
  imports: [
    CommonModule,
  ],
  exports: [InputWrapperContainerComponent],
  // entryComponents:[InputDDirective]
})
export class InputWrapperContainerModule { }
