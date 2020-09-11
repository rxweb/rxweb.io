import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLengthAsync-value-validator',
    templateUrl: './min-length-async-value.component.html'
})
export class MinLengthAsyncValueValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            mobileNo:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:10 })})], 
        });
    }
}
