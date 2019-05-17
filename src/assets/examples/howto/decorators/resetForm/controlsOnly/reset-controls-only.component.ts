import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import {User} from './user.model'


@Component({
    selector: 'app-reset-controlsOnly',
    templateUrl: './reset-controls-only.component.html'
})
export class ResetControlsOnlyComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
       let user = new User();   
        this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user);     
    }
   
    
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.ControlsOnly});   
      }
}
