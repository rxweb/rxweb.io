import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-message-validator',
    templateUrl: './numeric-async-message.component.html'
})
export class NumericAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            positiveNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({message:'{{0}} is not a positive number' })})], 
        });
    }
}
