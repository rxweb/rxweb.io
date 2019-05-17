import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {FormArray} from '@angular/forms';

@Component({
    selector: 'app-reset-formArraysOnly-validator',
    templateUrl: './reset-form-array-only.component.html'
})
export class ResetFormArraysOnlyValidatorComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
              
   this.userFormGroup = <RxFormGroup>this.formBuilder.group({

          hobbies:[
          {
            name:''
          }]
        });
    }
    getFormArray(){
      let formarray = this.userFormGroup.controls.hobbies as FormArray;
      return formarray.controls;
    }
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.FormArraysOnly});
       
      }
}
