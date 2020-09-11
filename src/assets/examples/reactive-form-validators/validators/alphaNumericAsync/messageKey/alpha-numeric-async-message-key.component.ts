import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumericAsync-messageKey-validator',
    templateUrl: './alpha-numeric-async-message-key.component.html'
})
export class AlphaNumericAsyncMessageKeyValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            colonyName:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({messageKey:'alphaNumericMessageKey' })})], 
        });
    }
}
