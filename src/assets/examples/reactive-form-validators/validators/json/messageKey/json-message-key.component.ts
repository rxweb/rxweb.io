import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-json-messageKey-validator',
    templateUrl: './json-message-key.component.html'
})
export class JsonMessageKeyValidatorComponent implements OnInit {
    jsonInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.jsonInfoFormGroup = this.formBuilder.group({
            countryJson:['', RxwebValidators.json({messageKey:'jsonMessageKey' })], 
        });
    }
}
