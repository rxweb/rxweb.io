import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alpha-messageKey-validator',
    templateUrl: './alpha-message-key.component.html'
})
export class AlphaMessageKeyValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            cityCode:['', RxwebValidators.alpha({messageKey:'alphaMessageKey' })], 
        });
    }
}
