import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-longitude-messageKey-validator',
    templateUrl: './longitude-message-key.component.html'
})
export class LongitudeMessageKeyValidatorComponent implements OnInit {
    countryFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.countryFormGroup = this.formBuilder.group({
            fourthCountryLongitude:['', RxwebValidators.longitude({messageKey:'longitudeMessageKey' })], 
        });
    }
}
