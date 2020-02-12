import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alpha-locale-validator',
    templateUrl: './alpha-locale.component.html'
})
export class AlphaLocaleValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            spanishcityName:['', RxwebValidators.alpha({locale:ValidationAlphabetLocale.spanish })], 
        });
    }
}
