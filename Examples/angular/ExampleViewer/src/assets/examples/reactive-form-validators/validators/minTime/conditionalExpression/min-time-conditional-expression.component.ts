import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-conditionalExpression-validator',
    templateUrl: './min-time-conditional-expression.component.html'
})
export class MinTimeConditionalExpressionValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',], 
            entryTime:['', RxwebValidators.minTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,fieldName:'openingTime' })], 
            totalInTime:['', RxwebValidators.minTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,fieldName:'netInTime' })], 
        });
    }
}
