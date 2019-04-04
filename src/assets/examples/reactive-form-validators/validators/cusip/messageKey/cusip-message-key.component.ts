import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-cusip-messageKey-validator',
    templateUrl: './cusip-message-key.component.html'
})
export class CusipMessageKeyValidatorComponent implements OnInit {
    companyInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.companyInfoFormGroup = this.formBuilder.group({
            amazonCorporationCusipCode:['', RxwebValidators.cusip({messageKey:'cusipMessageKey' })], 
        });
    }
}
