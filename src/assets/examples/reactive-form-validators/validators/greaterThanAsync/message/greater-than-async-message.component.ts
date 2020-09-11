import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanAsync-message-validator',
    templateUrl: './greater-than-async-message.component.html'
})
export class GreaterThanAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age'  ,message:'Please enter number greater than 0.' })})], 
        });
    }
}
