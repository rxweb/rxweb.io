import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-passwordAsync-add-validator',
    templateUrl: './password-async-add.component.html'
})
export class PasswordAsyncAddValidatorComponent implements OnInit {
    loginInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.loginInfoFormGroup = this.formBuilder.group({
        //    password:['',[], RxwebValidators.passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })})], 
        });
    }
}
