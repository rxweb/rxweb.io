import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factorAsync-complete-validator',
    templateUrl: './factor-async-complete.component.html'
})
export class FactorAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstNumber:['',[],], 
            fifthNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({fieldName:'firstNumber' })})], 
            fourthNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({dividend:50 })})], 
            sixthNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({dividend:30  ,message:'{{0}} is not a factor of 50' })})], 
            seventhNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({dividend:50  ,messageKey:'factorMessageKey' })})], 
        });
    }
}
