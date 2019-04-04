import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-upperCase-messageKey-validator',
    templateUrl: './upper-case-message-key.component.html'
})
export class UpperCaseMessageKeyValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            streetName:['', RxwebValidators.upperCase({messageKey:'upperCaseMessageKey' })], 
        });
    }
}
