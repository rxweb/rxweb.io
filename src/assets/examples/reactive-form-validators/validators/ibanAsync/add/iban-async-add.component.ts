import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ibanAsync-add-validator',
    templateUrl: './iban-async-add.component.html'
})
export class IbanAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            gBBankAccountNumber:['',[], RxwebValidators.ibanAsync({validatorConfig:of({countryCode:'US'})})], 
        });
    }
}
