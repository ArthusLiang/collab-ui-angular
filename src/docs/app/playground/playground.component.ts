import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'docs-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

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
    //TODO: Remove
    console.log(this.myForm.value)
  }



  findSelected(){
    console.log(this.myForm.value);
  }


  fireThis(){
    alert('hi');
  }















  //  funcToCallInParent(e){
  //   this.isSelected =!this.isSelected;
  // }

  //   funcToCallInParent1(e){
  //   this.isSelected1 = !this.isSelected1;
  //   console.log('new isSelected 1: ', this.isSelected1);
  //   // e.stopPropagation()
  // }

  // funcToCallInParent2(e){
  //   this.isSelected2 = !this.isSelected2;
  //   console.log('new isSelected 2: ', this.isSelected2);
  //   // e.stopPropagation()
  // }

  // funcToCallInParent3(e){
  //   this.isSelected3 = !this.isSelected3;
  //   // e.stopPropagation()
  // }
  // funcToCallInParent4(e){
  //   this.isSelected4 = !this.isSelected4;
  //   // e.stopPropagation()
  // }
  // funcToCallInParent5(e){
  //   this.isSelected5 = !this.isSelected5;
  //   // e.stopPropagation()
  // }
  // funcToCallInParent6(e){
  //   this.isSelected6 = !this.isSelected6;
  //   // e.stopPropagation()
  // }
  // funcToCallInParent7(e){
  //   this.isSelected7 = !this.isSelected7;
  //   // e.stopPropagation()
  // }
  // funcToCallInParent8(e){
  //   this.isSelected8 = !this.isSelected8;
  //   // e.stopPropagation()
  // }
  // funcToCallInParent9(e){
  //   this.isSelected9 = !this.isSelected9;
  //   // e.stopPropagation()
  // }

  // funcToCallInParent11(e){
  //   this.isSelected11 = !this.isSelected11;
  //   // e.stopPropagation()
  // }

  // funcToCallInParent12(e){
  //   this.isSelected12 = !this.isSelected12;
  //   // e.stopPropagation()
  // }

  }


  onClick(){
    //console.log('selected: ', this.selected);
    console.log('selected: ', this.isSelected);

  }

}




// isSelected: boolean = false;
// isSelected1 = true;
// isSelected2 = true;
// isSelected3 = true;
// isSelected4 = true;
// isSelected5 = true;
// isSelected6 = true;
// isSelected7 = true;
// isSelected8 = true;
// isSelected9 = true;
// isSelected11 = true;
// isSelected12 = true;


// disabled = true;

// test = true;
