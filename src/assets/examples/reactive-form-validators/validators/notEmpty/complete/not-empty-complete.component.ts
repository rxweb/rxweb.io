import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-notEmpty-complete-validator',
    templateUrl: './not-empty-complete.component.html'
})
export class NotEmptyCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['', RxwebValidators.notEmpty()], 
            middleName:['', RxwebValidators.notEmpty({conditionalExpression:(x,y) => x.firstName == "Bharat"  })], 
            lastName:['', RxwebValidators.notEmpty({conditionalExpression:'x => x.firstName == "Bharat"' })], 
            userName:['', RxwebValidators.notEmpty({message:'Username cannot be blank.' })], 
            fullName:['', RxwebValidators.notEmpty({messageKey:'notEmptyMessageKey' })], 
        });
    }
}
