import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThan-value-validator',
    templateUrl: './greater-than-value.component.html'
})
export class GreaterThanValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            minimumAge:['', RxwebValidators.greaterThan({value:18 })], 
        });
    }
}
