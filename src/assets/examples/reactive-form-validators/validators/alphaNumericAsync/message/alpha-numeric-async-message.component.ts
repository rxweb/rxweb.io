import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumericAsync-message-validator',
    templateUrl: './alpha-numeric-async-message.component.html'
})
export class AlphaNumericAsyncMessageValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            postalAddress:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({message:'Please enter only alphanumerics, special characters are not allowed.' })})], 
        });
    }
}
