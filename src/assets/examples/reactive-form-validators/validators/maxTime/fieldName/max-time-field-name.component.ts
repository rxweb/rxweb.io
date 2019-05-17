import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-fieldName-validator',
    templateUrl: './max-time-field-name.component.html'
})
export class MaxTimeFieldNameValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            closingTime:['',], 
            exitTime:['', RxwebValidators.maxTime({message:'You can enter only time format data'  ,fieldName:'closingTime' })], 
        });
    }
}
