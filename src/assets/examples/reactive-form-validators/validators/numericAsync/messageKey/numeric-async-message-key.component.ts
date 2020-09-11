import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-messageKey-validator',
    templateUrl: './numeric-async-message-key.component.html'
})
export class NumericAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            positiveNonDecimalNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({messageKey:'numericMessageKey' })})], 
        });
    }
}
