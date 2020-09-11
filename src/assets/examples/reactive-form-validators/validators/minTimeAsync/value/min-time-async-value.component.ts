import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTimeAsync-value-validator',
    templateUrl: './min-time-async-value.component.html'
})
export class MinTimeAsyncValueValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            openingTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({value:'08:00' })})], 
        });
    }
}
