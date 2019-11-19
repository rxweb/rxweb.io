import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-requiredTrue-message-validator',
    templateUrl: './required-true-message.component.html'
})
export class RequiredTrueMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            isActive:['', RxwebValidators.requiredTrue({message:'Should be active' })], 
        });
    }
}
