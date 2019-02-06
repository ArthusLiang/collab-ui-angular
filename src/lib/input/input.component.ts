import { Component, OnInit, Input, OnChanges, SimpleChanges, forwardRef} from '@angular/core';
import { SpinnerComponent } from '../spinner';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const cb = () => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'cui-input',
  templateUrl: './input.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class InputComponent implements ControlValueAccessor {
  //internal data model
  private innerValue: any = '';

  private onTouchedCallback: () => void = cb;
  private onChangeCallback: (_: any) => void = cb;

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  private determineErrorType = array => {
    return array.reduce((agg, e) => {
      return agg === 'error' ? agg : e.type || '';
    }, '');
  };

  private filterErrorsByType = (array, value) => {
    return array.reduce(
      (agg, e) => (e.type === value ? agg.concat(e.error) : agg),
      []
    );
  };

  @Input() public className: string;
  @Input() public disabled: boolean = false;
  @Input() public errorArr: any[]; //[] of objects with error type and error message keys
  @Input() public inputClassName: string;
  @Input() public inputHelpText: string;
  @Input() public inputSize: string;
  @Input() public label: string;
  @Input() public nestedLevel;
  @Input() public placeholder: string = "";
  @Input() public readOnly: boolean = false;
  @Input() public secondaryLabel: string;
  @Input() public theme: string;
  @Input() public type: string = "text";

  public errorType;
  public errors;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){
    if(changes.errorArr){
      let changedArr = changes.errorArr.currentValue

      if(changedArr.length > 0){
        this.errorType = this.determineErrorType(changedArr);
        this.errors = this.errorType && this.filterErrorsByType(changedArr, this.errorType);
      }
    }
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
