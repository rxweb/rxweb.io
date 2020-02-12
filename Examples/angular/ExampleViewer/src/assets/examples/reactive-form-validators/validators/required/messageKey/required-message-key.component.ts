import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-required-messageKey-validator',
    templateUrl: './required-message-key.component.html'
})
export class RequiredMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            fullName:['', RxwebValidators.required({messageKey:'requiredMessageKey' })], 
        });
    }
}
