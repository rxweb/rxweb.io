import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ibanAsync-messageKey-validator',
    templateUrl: './iban-async-message-key.component.html'
})
export class IbanAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            cHBankAccountNumber:['',[], RxwebValidators.ibanAsync({validatorConfig:of({messageKey:'ibanMessageKey'  ,countryCode:'CH' })})], 
        });
    }
}
