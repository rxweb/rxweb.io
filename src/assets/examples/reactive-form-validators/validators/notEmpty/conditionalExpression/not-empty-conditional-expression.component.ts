import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-notEmpty-conditionalExpression-validator',
    templateUrl: './not-empty-conditional-expression.component.html'
})
export class NotEmptyConditionalExpressionValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['', RxwebValidators.notEmpty()], 
            lastName:['', RxwebValidators.notEmpty({conditionalExpression:'x => x.firstName == "Bharat"' })], 
            middleName:['', RxwebValidators.notEmpty({conditionalExpression:(x,y) => x.firstName == "Bharat"  })], 
        });
    }
}
