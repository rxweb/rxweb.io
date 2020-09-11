import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxDateAsync-value-validator',
    templateUrl: './max-date-async-value.component.html'
})
export class MaxDateAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            allocationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018' })})], 
        });
    }
}
