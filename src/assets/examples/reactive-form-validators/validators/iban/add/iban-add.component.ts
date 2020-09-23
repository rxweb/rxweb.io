import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-iban-add-validator',
    templateUrl: './iban-add.component.html'
})
export class IbanAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            gBBankAccountNumber:['', RxwebValidators.iban({countryCode:"US"})], 
        });
    }
}
