import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaAsync-conditionalExpression-validator',
    templateUrl: './alpha-async-conditional-expression.component.html'
})
export class AlphaAsyncConditionalExpressionValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            countryName:['',[], RxwebValidators.alphaAsync()], 
            cityName:['',[], RxwebValidators.alphaAsync({conditionalExpression:'x => x.countryName =="India"' })], 
            countryCode:['',[], RxwebValidators.alphaAsync({conditionalExpression:(x,y) => x.countryName == "India" })], 
        });
    }   
}
