import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanAsync-value-validator',
    templateUrl: './greater-than-async-value.component.html'
})
export class GreaterThanAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            minimumAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({value:18 })})], 
        });
    }
}
