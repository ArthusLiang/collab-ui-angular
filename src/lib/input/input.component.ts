import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { SpinnerComponent } from '../spinner';

@Component({
  selector: 'cui-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements OnInit {

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
  @Input() public inputClassName: string;
  @Input() public inputSize: string;
  @Input() public readOnly: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public theme: string;
  @Input() public value: string | number;  //Initial text value
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public errorArr: any[]; //Array of objects with error type and error message keys

  @Input() public nestedLevel;

  public errorType;
  public errors;


  constructor() { }

  ngOnInit() {
    //console.log('OnInit error type: ', this.errorType)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('onChanges errorArr: ', changes.errorArr);

    if(changes.errorArr){
      // console.log('curr val: ', changes.errorArr.currentValue)
      let changedArr = changes.errorArr.currentValue

      if(changedArr.length > 0){

        this.errorType = this.determineErrorType(changedArr);
        this.errors = this.errorType && this.filterErrorsByType(changedArr, this.errorType);

        console.log('error type:', this.errorType);

        console.log('errors message: ',this.errors);

      }
    }

  }

  ngAfterViewInit(){
    // console.log('after Init errArr: ',this.errorArr);

    // console.log('after init error type: ', this.determineErrorType(this.errorArr))

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

  // fireThis(){
  //   console.log('value ', this.value)
  // }



}
