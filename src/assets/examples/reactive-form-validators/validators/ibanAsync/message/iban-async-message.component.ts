import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ibanAsync-message-validator',
    templateUrl: './iban-async-message.component.html'
})
export class IbanAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            cRBankAccountNumber:['',[], RxwebValidators.ibanAsync({validatorConfig:of({countryCode:'CR'  ,message:'You must enter a Costa Rica account number .' })})], 
        });
    }
}
