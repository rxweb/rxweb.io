import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-time-messageKey-validator',
    templateUrl: './time-message-key.component.html'
})
export class TimeMessageKeyValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            netInTime:['', RxwebValidators.time({messageKey:'timeMessageKey' })], 
        });
    }
}
