import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model'

@Component({
    selector: 'app-reset-definedPropsOnly',
    templateUrl: './reset-defined-props-only.component.html'
})
export class ResetDefinedPropsOnlyComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient )
	{ }

    ngOnInit() {
       let user = new User(); 
        this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user);     
    }
   
      
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.DefinedPropsOnly,value:{ firstName: 'John' }});   
      }
}
