import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-dateAsync-messageKey-validator',
    templateUrl: './date-async-message-key.component.html'
})
export class DateAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            confirmationDate:['',[], RxwebValidators.dateAsync({validatorConfig:of({messageKey:'dateMessageKey' })})], 
        });
    }
}
