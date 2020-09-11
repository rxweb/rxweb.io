import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-passwordAsync-messageKey-validator',
    templateUrl: './password-async-message-key.component.html'
})
export class PasswordAsyncMessageKeyValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
      //      confirmPassword:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true})  ,messageKey:'passwordMessageKey' })})], 
        });
    }
}
