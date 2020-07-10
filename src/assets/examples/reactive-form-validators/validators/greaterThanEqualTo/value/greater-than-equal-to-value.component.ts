import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualTo-value-validator',
    templateUrl: './greater-than-equal-to-value.component.html'
})
export class GreaterThanEqualToValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            minimumAge:['', RxwebValidators.greaterThanEqualTo({value:18 })], 
        });
    }
}
