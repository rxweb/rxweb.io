import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumberAsync-complete-validator',
    templateUrl: './min-number-async-complete.component.html'
})
export class MinNumberAsyncCompleteValidatorComponent implements OnInit {
    resultInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.group({
            maths:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35 })})], 
            science:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35  ,message:'Number should not be less than 35' })})], 
            economics:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35  ,messageKey:'minNumberMessageKey' })})], 
        });
    }
}
