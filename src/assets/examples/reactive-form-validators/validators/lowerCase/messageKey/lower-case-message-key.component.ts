import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lowerCase-messageKey-validator',
    templateUrl: './lower-case-message-key.component.html'
})
export class LowerCaseMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            state:['', RxwebValidators.lowerCase({messageKey:'lowerCaseMessageKey' })], 
        });
    }
}
