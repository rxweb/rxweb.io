import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLengthAsync-complete-validator',
    templateUrl: './min-length-async-complete.component.html'
})
export class MinLengthAsyncCompleteValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            countryName:['',[],], 
            mobileNo:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:10 })})], 
            landLineNo:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:8  ,message:'Minimum 8 characters are allowed' })})], 
            stateName:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:3  ,messageKey:'minLengthMessageKey' })})], 
        });
    }
}
