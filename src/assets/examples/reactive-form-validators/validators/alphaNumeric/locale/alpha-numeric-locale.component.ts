import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumeric-locale-validator',
    templateUrl: './alpha-numeric-locale.component.html'
})
export class AlphaNumericLocaleValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            spanishcityName:['', RxwebValidators.alphaNumeric({locale:ValidationAlphabetLocale.spanish })], 
        });
    }
}
