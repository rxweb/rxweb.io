import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualToAsync-value-validator',
    templateUrl: './greater-than-equal-to-async-value.component.html'
})
export class GreaterThanEqualToAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            minimumAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({value:18 })})], 
        });
    }
}
