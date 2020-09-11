import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumberAsync-add-validator',
    templateUrl: './min-number-async-add.component.html'
})
export class MinNumberAsyncAddValidatorComponent implements OnInit {
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
