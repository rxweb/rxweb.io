import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators ,NumericValueType} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-numericAsync-complete-validator',
    templateUrl: './numeric-async-complete.component.html'
})
export class NumericAsyncCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

				dataTypes = [ "Real", "Integer",];
	
	
	
	
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            dataType:['',[],], 
            negativeNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({acceptValue:NumericValueType.NegativeNumber })})], 
            totalAmount:['',[], RxwebValidators.numericAsync({validatorConfig:of({isFormat:true })})], 
            decimalNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({allowDecimal:true })})], 
            positiveNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({message:'{{0}} is not a positive number' })})], 
            positiveNonDecimalNumber:['',[], RxwebValidators.numericAsync({validatorConfig:of({messageKey:'numericMessageKey' })})], 
        });
    }
}
