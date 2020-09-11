import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-value-validator',
    templateUrl: './max-time-async-value.component.html'
})
export class MaxTimeAsyncValueValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            closingTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({value:'23:30' })})], 
        });
    }
}
