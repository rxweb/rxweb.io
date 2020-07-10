import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {User,Address} from './user.model'


@Component({
    selector: 'app-reset-with',
    templateUrl: './reset-with.component.html'
})
export class ResetWithComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient )
	{ }

    ngOnInit() {
       let user = new User();  
        user.address = new Address(); 
        this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user);     
    }
   
    
     resetForm(){
        this.userFormGroup.resetForm({ with: ["firstName","address.areaName"] });   
      }
}
