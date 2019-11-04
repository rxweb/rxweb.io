import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-password-message-validator',
    templateUrl: './password-message.component.html'
})
export class PasswordMessageValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
            resetPassword:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:{
                  minLength: 'Minimum Character length should be 5.',
                  maxLength: 'MaxLength allowed is 5'
                } })], 
        });
    }
}
