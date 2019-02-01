import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-wrapper-container',
  template: `
  <div class="whatever">
    <ng-container *ngTemplateOutlet="template"></ng-container>
  </div>
  `
})
export class InputWrapperContainerComponent {
  @Input() template: TemplateRef<any>;
}
