import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-requiredTrue-messageKey-validator',
    templateUrl: './required-true-message-key.component.html'
})
export class RequiredTrueMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            isBlocked:['', RxwebValidators.requiredTrue({messageKey:'requiredTrueMessageKey' })], 
        });
    }
}
