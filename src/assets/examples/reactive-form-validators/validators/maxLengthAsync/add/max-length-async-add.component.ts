import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLengthAsync-add-validator',
    templateUrl: './max-length-async-add.component.html'
})
export class MaxLengthAsyncAddValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            firstName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:10 })})], 
        });
    }
}
