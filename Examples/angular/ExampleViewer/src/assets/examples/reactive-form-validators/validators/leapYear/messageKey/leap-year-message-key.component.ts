import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-leapYear-messageKey-validator',
    templateUrl: './leap-year-message-key.component.html'
})
export class LeapYearMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            promotionYear:['', RxwebValidators.leapYear({messageKey:'leapYearMessageKey' })], 
        });
    }
}
