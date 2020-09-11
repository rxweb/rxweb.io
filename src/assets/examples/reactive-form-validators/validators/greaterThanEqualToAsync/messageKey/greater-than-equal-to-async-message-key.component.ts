import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualToAsync-messageKey-validator',
    templateUrl: './greater-than-equal-to-async-message-key.component.html'
})
export class GreaterThanEqualToAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            joiningAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey' })})], 
        });
    }
}
