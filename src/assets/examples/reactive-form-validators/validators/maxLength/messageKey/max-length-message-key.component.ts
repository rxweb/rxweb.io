import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLength-messageKey-validator',
    templateUrl: './max-length-message-key.component.html'
})
export class MaxLengthMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            fullName:['', RxwebValidators.maxLength({value:20  ,messageKey:'maxLengthMessageKey' })], 
        });
    }
}
