import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-dateAsync-allowISODate-validator',
    templateUrl: './date-async-allow-i-s-o-date.component.html'
})
export class DateAsyncAllowISODateValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            registrationDate:['',[], RxwebValidators.dateAsync({validatorConfig:of({allowISODate:true })})], 
        });
    }
}
