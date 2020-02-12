import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-requiredTrue-conditionalExpression-validator',
    templateUrl: './required-true-conditional-expression.component.html'
})
export class RequiredTrueConditionalExpressionValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            isAgree:['', RxwebValidators.requiredTrue()], 
            checkMeOut:['', RxwebValidators.requiredTrue({conditionalExpression:'x => x.isAgree == true' })], 
            isChecked:['', RxwebValidators.requiredTrue({conditionalExpression:(x,y) => x.isAgree == true })], 
        });
    }
}
