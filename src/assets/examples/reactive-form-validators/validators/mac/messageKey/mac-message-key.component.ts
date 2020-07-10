import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mac-messageKey-validator',
    templateUrl: './mac-message-key.component.html'
})
export class MacMessageKeyValidatorComponent implements OnInit {
    macAddressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.macAddressInfoFormGroup = this.formBuilder.group({
            serverMacAddress:['', RxwebValidators.mac({messageKey:'macMessageKey' })], 
        });
    }
}
