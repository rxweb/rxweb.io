import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThan-messageKey-validator',
    templateUrl: './greater-than-message-key.component.html'
})
export class GreaterThanMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            joiningAge:['', RxwebValidators.greaterThan({fieldName:'age'  ,messageKey:'greaterThanMessageKey' })], 
        });
    }
}
