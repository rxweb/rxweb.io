import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factor-messageKey-validator',
    templateUrl: './factor-message-key.component.html'
})
export class FactorMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            seventhNumber:['', RxwebValidators.factor({dividend:50  ,messageKey:'factorMessageKey' })], 
        });
    }
}
