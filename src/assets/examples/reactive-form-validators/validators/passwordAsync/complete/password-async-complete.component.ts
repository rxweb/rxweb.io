import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-passwordAsync-complete-validator',
    templateUrl: './password-async-complete.component.html'
})
export class PasswordAsyncCompleteValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
            // newPassword:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })})], 
            // resetPassword:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:{
            //       minLength: 'Minimum Character length should be 5.',
            //       maxLength: 'MaxLength allowed is 5'
            //     } })})], 
            // oldPassword:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:'Password is not valid' })})], 
            // confirmPassword:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,messageKey:'passwordMessageKey' })})], 
        });
    }
}
