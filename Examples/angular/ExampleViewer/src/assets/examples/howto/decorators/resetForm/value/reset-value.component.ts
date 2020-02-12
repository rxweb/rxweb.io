import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model'


@Component({
    selector: 'app-reset-value',
    templateUrl: './reset-value.component.html'
})
export class ResetValueComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
       let user = new User();  

        this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user);     
    }
   
    
     resetForm(){
        this.userFormGroup.resetForm({ value: { firstName: 'John' } });   
      }
}
