import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-fieldName-validator',
    templateUrl: './min-time-field-name.component.html'
})
export class MinTimeFieldNameValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            netInTime:['',], 
            entryTime:['', RxwebValidators.minTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,fieldName:'openingTime' })], 
            totalInTime:['', RxwebValidators.minTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,fieldName:'netInTime' })], 
        });
    }
}
