import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-dateAsync-message-validator',
    templateUrl: './date-async-message.component.html'
})
export class DateAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            allocationDate:['', RxwebValidators.dateAsync({validatorConfig:of({message:'{{0}} is not a valid date' })})], 
        });
    }
}
