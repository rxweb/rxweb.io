import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-requiredTrue-add-validator',
    templateUrl: './required-true-add.component.html'
})
export class RequiredTrueAddValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            ischecked:['', RxwebValidators.requiredTrue()], 
        });
    }
}
