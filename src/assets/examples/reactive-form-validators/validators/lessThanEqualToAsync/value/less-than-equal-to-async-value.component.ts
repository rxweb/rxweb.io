import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualToAsync-value-validator',
    templateUrl: './less-than-equal-to-async-value.component.html'
})
export class LessThanEqualToAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            maximumAge:['',[], RxwebValidators.lessThanEqualToAsync({validatorConfig:of({value:60 })})], 
        });
    }
}
