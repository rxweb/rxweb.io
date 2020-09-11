import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumberAsync-value-validator',
    templateUrl: './max-number-async-value.component.html'
})
export class MaxNumberAsyncValueValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.subjectDetailsFormGroup = this.formBuilder.group({
            passingMarks:['',[], RxwebValidators.maxNumberAsync({validatorConfig:of({value:50 })})], 
        });
    }
}
