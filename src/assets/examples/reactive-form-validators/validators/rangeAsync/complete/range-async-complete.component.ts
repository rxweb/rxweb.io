import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-rangeAsync-complete-validator',
    templateUrl: './range-async-complete.component.html'
})
export class RangeAsyncCompleteValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            age:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:18  ,maximumNumber:60 })})], 
            salary:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:1000  ,maximumNumber:200000  ,message:'Your Salary should be between 1000 to 200000.' })})], 
            noOfprojects:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey' })})], 
        });
    }
}
