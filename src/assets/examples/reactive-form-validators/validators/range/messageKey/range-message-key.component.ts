import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-range-messageKey-validator',
    templateUrl: './range-message-key.component.html'
})
export class RangeMessageKeyValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.employeeInfoFormGroup = this.formBuilder.group({
            noOfprojects:['', RxwebValidators.range({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey' })], 
        });
    }
}
