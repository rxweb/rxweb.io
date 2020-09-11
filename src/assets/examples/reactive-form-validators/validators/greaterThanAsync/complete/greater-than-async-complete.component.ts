import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanAsync-complete-validator',
    templateUrl: './greater-than-async-complete.component.html'
})
export class GreaterThanAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            age:['',[],], 
            retiermentAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age' })})], 
            minimumAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({value:18 })})], 
            otherAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age'  ,message:'Please enter number greater than 0.' })})], 
            joiningAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age'  ,messageKey:'greaterThanMessageKey' })})], 
        });
    }
}
