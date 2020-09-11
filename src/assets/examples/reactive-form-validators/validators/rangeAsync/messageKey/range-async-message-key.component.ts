import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-rangeAsync-messageKey-validator',
    templateUrl: './range-async-message-key.component.html'
})
export class RangeAsyncMessageKeyValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            noOfprojects:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey' })})], 
        });
    }
}
