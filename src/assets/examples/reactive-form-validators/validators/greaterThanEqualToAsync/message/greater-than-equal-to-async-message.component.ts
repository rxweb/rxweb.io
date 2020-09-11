import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualToAsync-message-validator',
    templateUrl: './greater-than-equal-to-async-message.component.html'
})
export class GreaterThanEqualToAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.' })})], 
        });
    }
}
