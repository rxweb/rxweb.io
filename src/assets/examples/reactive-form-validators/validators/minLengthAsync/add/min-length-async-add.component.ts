import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLengthAsync-add-validator',
    templateUrl: './min-length-async-add.component.html'
})
export class MinLengthAsyncAddValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            countryName:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:3 })})], 
        });
    }
}
