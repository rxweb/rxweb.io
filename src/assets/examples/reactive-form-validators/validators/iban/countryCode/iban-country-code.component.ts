import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-iban-countryCode-validator',
    templateUrl: './iban-country-code.component.html'
})
export class IbanCountryCodeValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            gBBankAccountNumber:['', RxwebValidators.iban({countryCode:'GB' })], 
        });
    }
}
