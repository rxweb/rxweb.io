import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-rangeAsync-maximumNumber-validator',
    templateUrl: './range-async-maximum-number.component.html'
})
export class RangeAsyncMaximumNumberValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            age:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:18  ,maximumNumber:60 })})], 
        });
    }
}
