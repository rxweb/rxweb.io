import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanAsync-messageKey-validator',
    templateUrl: './greater-than-async-message-key.component.html'
})
export class GreaterThanAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            joiningAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age'  ,messageKey:'greaterThanMessageKey' })})], 
        });
    }
}
