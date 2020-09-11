import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators,ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaAsync-complete-validator',
    templateUrl: './alpha-async-complete.component.html'
})
export class AlphaAsyncCompleteValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            countryName:['', [],RxwebValidators.alphaAsync()], 
            countryCode:['',[], RxwebValidators.alphaAsync({conditionalExpression:(x,y) => x.countryName == "India" })], 
            cityName:['', [],RxwebValidators.alphaAsync({conditionalExpression:'x => x.countryName =="India"' })], 
            spanishcityName:['',[], RxwebValidators.alphaAsync({locale:ValidationAlphabetLocale.spanish })], 
            stateName:['',[], RxwebValidators.alphaAsync({allowWhiteSpace:true })], 
            stateCode:['',[], RxwebValidators.alphaAsync({message:'You can enter only alphabets.' })], 
            cityCode:['',[], RxwebValidators.alphaAsync({messageKey:'alphaMessageKey' })], 
        });
    }
}
