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

    <example-input-default></example-input-default>

    <example-input-error></example-input-error>

    <example-input-warning></example-input-warning>

    <example-input-success></example-input-success>

    <example-input-disabled></example-input-disabled>

    <example-input-readonly></example-input-readonly>

    <example-input-helptext></example-input-helptext>

    <example-input-secondary-label></example-input-secondary-label>
  `,
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

}

