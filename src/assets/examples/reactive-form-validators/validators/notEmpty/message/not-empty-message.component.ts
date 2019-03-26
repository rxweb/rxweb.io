import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-notEmpty-message-validator',
    templateUrl: './not-empty-message.component.html'
})
export class NotEmptyMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['', RxwebValidators.notEmpty({message:'Username cannot be blank.' })], 
        });
    }
}
