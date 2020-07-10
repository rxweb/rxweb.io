import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-password-complete-validator',
    templateUrl: './password-complete.component.html'
})
export class PasswordCompleteValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
            newPassword:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })], 
            resetPassword:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:{
                  minLength: 'Minimum Character length should be 5.',
                  maxLength: 'MaxLength allowed is 5'
                } })], 
            oldPassword:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:'Password is not valid' })], 
            confirmPassword:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,messageKey:'passwordMessageKey' })], 
        });
    }
}
