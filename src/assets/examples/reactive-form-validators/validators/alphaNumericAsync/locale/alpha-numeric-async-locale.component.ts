import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumericAsync-locale-validator',
    templateUrl: './alpha-numeric-async-locale.component.html'
})
export class AlphaNumericAsyncLocaleValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            spanishcityName:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish })})], 
        });
    }
}
