import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'docs-playground',
  template: `
    <example-checkbox-default></example-checkbox-default>

    <example-checkbox-disabled></example-checkbox-disabled>

    <example-checkbox-indeterminate></example-checkbox-indeterminate>

    <example-checkbox-nested></example-checkbox-nested>

    <example-radio-default></example-radio-default>

    <example-radio-nested></example-radio-nested>

    <example-radio-disabled></example-radio-disabled>
  `,
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  checkedValues: string[] = ['val1','val2'];


  //Radio NgModel example
  selectedValue: string;

  checked: boolean = false;

  dataModel: string = '';

  errorObj = {
    'required': 'This field is required',
    'minlength': 'This field should be more than 8 chars',
    'maxlength': 'This field cant be more than 12 chars',
    'email': "Not a valid email"
  }
}

