import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-date-messageKey-validator',
    templateUrl: './date-message-key.component.html'
})
export class DateMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            confirmationDate:['', RxwebValidators.date({messageKey:'dateMessageKey' })], 
        });
    }
}
