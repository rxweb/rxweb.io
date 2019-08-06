import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numeric-digitsInfo-validator',
    templateUrl: './numeric-digits-info.component.html'
})
export class NumericDigitsInfoValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            formattedDecimalNumber:['', RxwebValidators.numeric({digitsInfo:'1.0-2'  ,isFormat:true  ,allowDecimal:true })], 
        });
    }
}
