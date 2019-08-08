import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-different-messageKey-validator',
    templateUrl: './different-message-key.component.html'
})
export class DifferentMessageKeyValidatorComponent implements OnInit {
    accountInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.accountInfoFormGroup = this.formBuilder.group({
            emailAddress:['',], 
            recoveryEmailAddress:['', RxwebValidators.different({fieldName:'emailAddress'  ,messageKey:'differentMessageKey' })], 
        });
    }
}
