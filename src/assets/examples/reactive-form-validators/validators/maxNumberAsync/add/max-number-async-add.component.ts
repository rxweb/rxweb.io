import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumberAsync-add-validator',
    templateUrl: './max-number-async-add.component.html'
})
export class MaxNumberAsyncAddValidatorComponent implements OnInit {
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
