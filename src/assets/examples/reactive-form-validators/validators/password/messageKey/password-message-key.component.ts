import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-password-messageKey-validator',
    templateUrl: './password-message-key.component.html'
})
export class PasswordMessageKeyValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
            confirmPassword:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,messageKey:'passwordMessageKey' })], 
        });
    }
}
