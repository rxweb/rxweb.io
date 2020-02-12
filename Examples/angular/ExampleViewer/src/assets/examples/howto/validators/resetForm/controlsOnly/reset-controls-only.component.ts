import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {FormArray} from '@angular/forms';

@Component({
    selector: 'app-reset-controlsOnly-validator',
    templateUrl: './reset-controls-only.component.html'
})
export class ResetControlsOnlyValidatorComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
              
   this.userFormGroup = <RxFormGroup>this.formBuilder.group({
     firstName:[''],       
        });
    }
   
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.ControlsOnly});       
      }
}
