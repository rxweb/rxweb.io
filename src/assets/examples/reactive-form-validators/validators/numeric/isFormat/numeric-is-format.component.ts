import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numeric-isFormat-validator',
    templateUrl: './numeric-is-format.component.html'
})
export class NumericIsFormatValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            totalAmount:['', RxwebValidators.numeric({isFormat:true })], 
        });
    }
}
