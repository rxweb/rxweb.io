import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaAsync-locale-validator',
    templateUrl: './alpha-async-locale.component.html'
})
export class AlphaAsyncLocaleValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            spanishcityName:['',[], [RxwebValidators.alphaAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish})})]]  , 
        });
    }
}
