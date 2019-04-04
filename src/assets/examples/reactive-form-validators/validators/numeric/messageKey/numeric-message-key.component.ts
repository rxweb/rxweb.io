import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numeric-messageKey-validator',
    templateUrl: './numeric-message-key.component.html'
})
export class NumericMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            positiveNonDecimalNumber:['', RxwebValidators.numeric({messageKey:'numericMessageKey' })], 
        });
    }
}
