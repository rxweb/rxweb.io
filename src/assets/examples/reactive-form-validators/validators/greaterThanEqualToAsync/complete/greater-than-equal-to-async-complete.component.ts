import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualToAsync-complete-validator',
    templateUrl: './greater-than-equal-to-async-complete.component.html'
})
export class GreaterThanEqualToAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            admissionAge:['',[],], 
            retiermentAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge' })})], 
            minimumAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({value:18 })})], 
            otherAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.' })})], 
            joiningAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey' })})], 
        });
    }
}
