import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumeric-messageKey-validator',
    templateUrl: './alpha-numeric-message-key.component.html'
})
export class AlphaNumericMessageKeyValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            colonyName:['', RxwebValidators.alphaNumeric({messageKey:'alphaNumericMessageKey' })], 
        });
    }
}
