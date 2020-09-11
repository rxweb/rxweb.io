import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-allowDecimal-validator',
    templateUrl: './numeric-async-allow-decimal.component.html'
})
export class NumericAsyncAllowDecimalValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            decimalNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({allowDecimal:true })})], 
        });
    }
}
