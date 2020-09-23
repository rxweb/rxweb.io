import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-iban-message-validator',
    templateUrl: './iban-message.component.html'
})
export class IbanMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            cHBankAccountNumber:['', RxwebValidators.iban({message:'Enter valid CH account Number.' })], 
        });
    }
}
