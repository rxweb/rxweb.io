import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-latLong-messageKey-validator',
    templateUrl: './lat-long-message-key.component.html'
})
export class LatLongMessageKeyValidatorComponent implements OnInit {
    countryFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.countryFormGroup = this.formBuilder.group({
            fourthCountry:['', RxwebValidators.latLong({messageKey:'latLongMessageKey' })], 
        });
    }
}
