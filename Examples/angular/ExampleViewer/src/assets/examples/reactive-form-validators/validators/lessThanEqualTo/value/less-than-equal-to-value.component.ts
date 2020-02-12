import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualTo-value-validator',
    templateUrl: './less-than-equal-to-value.component.html'
})
export class LessThanEqualToValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            maximumAge:['', RxwebValidators.lessThanEqualTo({value:60 })], 
        });
    }
}
