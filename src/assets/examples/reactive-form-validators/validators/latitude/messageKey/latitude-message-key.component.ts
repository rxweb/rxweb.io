import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-latitude-messageKey-validator',
    templateUrl: './latitude-message-key.component.html'
})
export class LatitudeMessageKeyValidatorComponent implements OnInit {
    countryFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.countryFormGroup = this.formBuilder.group({
            fourthCountryLatitude:['', RxwebValidators.latitude({messageKey:'latitudeMessageKey' })], 
        });
    }
}
