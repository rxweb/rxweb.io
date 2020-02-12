import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import {User,Hobby} from './user.model'
import {FormArray} from '@angular/forms';

@Component({
    selector: 'app-reset-formArraysOnly',
    templateUrl: './reset-form-array-only.component.html'
})
export class ResetFormArraysOnlyComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
       let user = new User();
        let hobby = new Hobby();

         user.hobbies = new Array<Hobby>();
         user.hobbies.push(hobby);  
        this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user);     
    }
      getFormArray(){
      let formarray = this.userFormGroup.controls.hobbies as FormArray;
      return formarray.controls;
    }
    
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.FormArraysOnly});   
      }
}
