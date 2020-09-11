import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLengthAsync-messageKey-validator',
    templateUrl: './min-length-async-message-key.component.html'
})
export class MinLengthAsyncMessageKeyValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            stateName:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:3  ,messageKey:'minLengthMessageKey' })})], 
        });
    }
}
