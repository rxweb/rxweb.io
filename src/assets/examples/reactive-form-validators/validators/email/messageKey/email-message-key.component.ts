import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-email-messageKey-validator',
    templateUrl: './email-message-key.component.html'
})
export class EmailMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            organizationEmailAddress:['', RxwebValidators.email({messageKey:'emailMessageKey' })], 
        });
    }
}
