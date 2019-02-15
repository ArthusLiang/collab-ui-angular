import { Component, OnInit, Input, forwardRef,OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'cui-checkbox',
  templateUrl: './checkbox.component.html' ,
  styles: [],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {

  writeValue(obj: any): void {
    this.selectedItem = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  // call if value was changed inside our component
  private _onChange = (_: any) => {};
  // call if input was "touched"
  private _onTouched = () => {};

    /** @option Optional css class string | ''  */
  @Input() public class: string = '';
    /** @option Sets the disabled attribute of the Input | false */
  @Input() public disabled: boolean = false;
  /** @option Optional indeterminate capabilities of checkbox | false */
  @Input() public indeterminate: boolean = false;
    /** @option Input label text | '' */
  @Input() public label: string = '';
  /** @option Set the level of nested checkboxes | 0 */
  @Input() public nestedLevel: number = 0;
  /** @option Optional required setting for Checkbox input | false */
  @Input() public required: boolean = false;
  /** @option Unique HTML ID. Used for tying label to HTML input | '' */
  @Input() public htmlId: string = '';
  /** @option sets value of the Checkbox input element | false */
  @Input() public selectedItem: boolean = false;
  /** @option Sets the attribute name to the Checkbox input element | '' */
  @Input() public name: string = '';

  /** @option optional emitter to invoke an onChange handler when checkbox toggles */
  @Output() onSelectItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges){

  }

  get wrapperClasses() {
    return {
      ['cui-input--nested-' + this.nestedLevel]: this.nestedLevel,
      [this.class]: this.class,
    };
  }

  get inputClasses() {
    return {
      ['indeterminate']: this.indeterminate,
    };
  }

  toggleCheckbox(e) {
    e.preventDefault();
    if(!this.disabled){
      this.onSelectItem.emit(e)
    }
  }
}


/**
* @component checkbox
* @section default
* @angular
*

<cui-checkbox
  label="default checkbox"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
>
</cui-checkbox>

**/


/**
* @component checkbox
* @section disabled
* @angular
*

<cui-checkbox
  label="disabled checkbox"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
  [disabled]="true"
>
</cui-checkbox>

**/


/**
* @component checkbox
* @section indeterminate
* @angular
*

<cui-checkbox
  label="indeterminate label"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
  [indeterminate]="true"
>
</cui-checkbox>

**/


/**
* @component checkbox
* @section nested
* @angular
*

<cui-checkbox
  label="Parent Checkbox"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
>
</cui-checkbox>

<cui-checkbox
  label="Child Checkbox Nested 1 Level"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
  [nestedLevel]="1"
>
</cui-checkbox>

<cui-checkbox
  label="Child Checkbox Nested 2 Levels"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
  [nestedLevel]="2"
>
</cui-checkbox>

<cui-checkbox
  label="Child Checkbox Nested 3 Levels"
  [(selectedItem)]="isSelected"
  (onSelectItem)="funcToCallInParent()"
  [nestedLevel]="3"
>
</cui-checkbox>

**/


/**
* @component checkbox
* @section group
* @angular
*

<div class="cui-checkbox-group">
  <cui-checkbox
    label="me"
    [(selectedItem)]="isSelected"
    (onSelectItem)="funcToCallInParent()"
  >
  </cui-checkbox>
  <cui-checkbox
    label="you"
    [(selectedItem)]="isSelected"
    (onSelectItem)="funcToCallInParent()"
  >
  </cui-checkbox>
  <cui-checkbox
    label="us"
    [(selectedItem)]="isSelected"
    (onSelectItem)="funcToCallInParent()"
  >
  </cui-checkbox>
</div>

**/