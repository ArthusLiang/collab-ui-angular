import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'docs-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  checkedValues: string[] = ['val1','val2'];

  checked: boolean = false;

  dataModel: string = '';

  errorObj = {
    'required': 'This field is required',
    'minlength': 'This field should be more than 8 chars',
    'maxlength': 'This field cant be more than 12 chars',
    'email': "Not a valid email"
  }

  myForm;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      radioControl: ['Option 2', [Validators.required]]
    })

    console.log(this.myForm.value)

    console.log(this.checkedValues);

  }

  findSelected(){
    console.log(this.myForm.value);
  }

  fireThis(){
    alert('hit');
  }
}
