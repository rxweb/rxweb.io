import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms"
import { RxwebValidators,RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-group-complete',
    templateUrl: './group-complete.component.html'
})
export class GroupCompleteComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
          userName:['',Validators.required],
          password:['',[Validators.required,Validators.min(5)]],
          confirmPassword:['',RxwebValidators.compare({fieldName:'password'})],
          address:{
            areaName:''
          },
          hobbies:[
          {
            name:''
          }]
        });
    }
}