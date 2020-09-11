import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLengthAsync-value-validator',
    templateUrl: './max-length-async-value.component.html'
})
export class MaxLengthAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:16 })})], 
        });
    }
}
