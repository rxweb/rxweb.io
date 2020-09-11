import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-add-validator',
    templateUrl: './numeric-async-add.component.html'
})
export class NumericAsyncAddValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            integerNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false })})], 
        });
    }
}
