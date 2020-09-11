import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumberAsync-value-validator',
    templateUrl: './min-number-async-value.component.html'
})
export class MinNumberAsyncValueValidatorComponent implements OnInit {
    resultInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.group({
            maths:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35 })})], 
        });
    }
}
