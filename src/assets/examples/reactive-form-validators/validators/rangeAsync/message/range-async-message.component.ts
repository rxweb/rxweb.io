import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-rangeAsync-message-validator',
    templateUrl: './range-async-message.component.html'
})
export class RangeAsyncMessageValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            salary:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:1000  ,maximumNumber:200000  ,message:'Your Salary should be between 1000 to 200000.' })})], 
        });
    }
}
