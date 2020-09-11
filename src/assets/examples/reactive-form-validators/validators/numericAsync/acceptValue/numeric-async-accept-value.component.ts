import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-acceptValue-validator',
    templateUrl: './numeric-async-accept-value.component.html'
})
export class NumericAsyncAcceptValueValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            negativeNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({acceptValue:NumericValueType.NegativeNumber })})], 
        });
    }
}
