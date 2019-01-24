import { Component, OnInit, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner';

@Component({
  selector: 'cui-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements OnInit {

  @Input() public className: string;
  @Input() public inputClassName: string;
  @Input() public inputSize: string;
  @Input() public readOnly: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public theme: string;
  @Input() public value: string | number;  //Initial text value
  @Input() public placeholder: string;

  @Input() public errorType;
  @Input() public nestedLevel;



  constructor() { }

  ngOnInit() {
  }

  get wrapperClasses() {
    return {
      [this.inputSize + ' columns']: this.inputSize,
      ['read-only']: this.readOnly,
      ['disabled']: this.disabled,
      ['cui-input-group--' + this.theme]: this.theme,
      [this.errorType]: this.errorType,
      ['cui-input--nested-' + this.nestedLevel]: this.nestedLevel,
      [this.className]: this.className,
    };
  }

  get inputClasses() {
    return {
      [this.inputSize + ' columns']: this.inputSize,
      ['cui-input-group--' + this.theme]: this.theme,
      [this.errorType]: this.errorType,
      ['cui-input--nested-' + this.nestedLevel]: this.nestedLevel,

      [this.inputClassName]: this.inputClassName,
      ['read-only']: this.readOnly,
      ['disabled']: this.disabled,
      ['dirty']: this.value
    };
  }





}
