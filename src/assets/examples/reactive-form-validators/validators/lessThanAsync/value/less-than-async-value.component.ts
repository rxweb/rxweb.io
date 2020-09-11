import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanAsync-value-validator',
    templateUrl: './less-than-async-value.component.html'
})
export class LessThanAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            maximumAge:['',[], RxwebValidators.lessThanAsync({validatorConfig:of({value:60 })})], 
        });
    }
}
