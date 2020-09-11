import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-passwordAsync-message-validator',
    templateUrl: './password-async-message.component.html'
})
export class PasswordAsyncMessageValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
          //  resetPassword:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:{
            //      minLength: 'Minimum Character length should be 5.',
              //    maxLength: 'MaxLength allowed is 5'
               // } })})], 
        });
    }
}
