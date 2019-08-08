import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualTo-messageKey-validator',
    templateUrl: './greater-than-equal-to-message-key.component.html'
})
export class GreaterThanEqualToMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            admissionAge:['',], 
            joiningAge:['', RxwebValidators.greaterThanEqualTo({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey' })], 
        });
    }
}
