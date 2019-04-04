import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-notEmpty-messageKey-validator',
    templateUrl: './not-empty-message-key.component.html'
})
export class NotEmptyMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            fullName:['', RxwebValidators.notEmpty({messageKey:'notEmptyMessageKey' })], 
        });
    }
}
