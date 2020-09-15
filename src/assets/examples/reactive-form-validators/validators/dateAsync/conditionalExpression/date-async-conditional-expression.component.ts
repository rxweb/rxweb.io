import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-dateAsync-conditionalExpression-validator',
    templateUrl: './date-async-conditional-expression.component.html'
})
export class DateAsyncConditionalExpressionValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            birthDate:['', RxwebValidators.dateAsync()], 
            admissionDate:['', RxwebValidators.dateAsync({validatorConfig:of({conditionalExpression:(x,y) => x.birthDate == "16/04/1997"  })})], 
        });
    }
}
