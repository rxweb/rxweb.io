import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ibanAsync-countryCode-validator',
    templateUrl: './iban-async-country-code.component.html'
})
export class IbanAsyncCountryCodeValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            gBBankAccountNumber:['',[], RxwebValidators.ibanAsync({validatorConfig:of({countryCode:'US' })})], 
        });
    }
}
