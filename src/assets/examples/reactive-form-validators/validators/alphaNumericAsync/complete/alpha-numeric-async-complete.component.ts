import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumericAsync-complete-validator',
    templateUrl: './alpha-numeric-async-complete.component.html'
})
export class AlphaNumericAsyncCompleteValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            areaName:['',[], RxwebValidators.alphaNumericAsync()], 
            flatAddress:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({allowWhiteSpace:true })})], 
            spanishcityName:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish })})], 
            postalAddress:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({message:'Please enter only alphanumerics, special characters are not allowed.' })})], 
            colonyName:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({messageKey:'alphaNumericMessageKey' })})], 
        });
    }
}
