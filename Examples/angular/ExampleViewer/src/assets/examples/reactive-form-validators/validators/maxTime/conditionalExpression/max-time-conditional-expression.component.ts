import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-conditionalExpression-validator',
    templateUrl: './max-time-conditional-expression.component.html'
})
export class MaxTimeConditionalExpressionValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',], 
            entryTime:['', RxwebValidators.maxTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,value:'11:00' })], 
            totalInTime:['', RxwebValidators.maxTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,value:'12:00' })], 
        });
    }
}
