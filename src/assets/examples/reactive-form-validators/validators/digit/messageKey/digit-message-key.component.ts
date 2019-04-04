import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-digit-messageKey-validator',
    templateUrl: './digit-message-key.component.html'
})
export class DigitMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            zipCode:['', RxwebValidators.digit({messageKey:'digitMessageKey' })], 
        });
    }
}
