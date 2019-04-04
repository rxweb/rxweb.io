import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-odd-messageKey-validator',
    templateUrl: './odd-message-key.component.html'
})
export class OddMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherOddNumber:['', RxwebValidators.odd({messageKey:'oddMessageKey' })], 
        });
    }
}
