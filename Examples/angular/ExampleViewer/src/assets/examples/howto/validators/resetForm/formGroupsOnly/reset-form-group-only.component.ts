import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {FormArray} from '@angular/forms';

@Component({
    selector: 'app-reset-formGroupsOnly-validator',
    templateUrl: './reset-form-group-only.component.html'
})
export class ResetFormGroupsOnlyValidatorComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient )
	{ }

    ngOnInit() {
              
   this.userFormGroup = <RxFormGroup>this.formBuilder.group({
   
          address:{
            areaName:''
          }        
        });
    }
  
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.FormGroupsOnly});
       
      }
}
