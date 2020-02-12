import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLength-messageKey-validator',
    templateUrl: './min-length-message-key.component.html'
})
export class MinLengthMessageKeyValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            stateName:['', RxwebValidators.minLength({value:3  ,messageKey:'minLengthMessageKey' })], 
        });
    }
}
