import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-isFormat-validator',
    templateUrl: './numeric-async-is-format.component.html'
})
export class NumericAsyncIsFormatValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            totalAmount:['',[], RxwebValidators.numericAsync({validatorConfig:of({isFormat:true })})], 
        });
    }
}
