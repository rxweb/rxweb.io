import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import {User,Address,Hobby} from './user.model'
import {FormArray} from '@angular/forms';

@Component({
    selector: 'app-reset-all',
    templateUrl: './reset-all.component.html'
})
export class ResetAllComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder, private http: HttpClient )
	{ }

    ngOnInit() {
       let user = new User();  
        user.address = new Address(); 
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
        this.userFormGroup.resetForm({resetType:ResetFormType.All});   
      }
}
