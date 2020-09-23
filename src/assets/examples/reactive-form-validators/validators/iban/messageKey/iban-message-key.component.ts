import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-iban-messageKey-validator',
    templateUrl: './iban-message-key.component.html'
})
export class IbanMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            cRBankAccountNumber:['', RxwebValidators.iban({messageKey:'ibanMessageKey' })], 
        });
    }
}
