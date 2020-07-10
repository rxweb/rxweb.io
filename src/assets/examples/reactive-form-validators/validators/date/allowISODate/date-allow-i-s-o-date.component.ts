import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-date-allowISODate-validator',
    templateUrl: './date-allow-i-s-o-date.component.html'
})
export class DateAllowISODateValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            registrationDate:['', RxwebValidators.date({allowISODate:true })], 
        });
    }
}
