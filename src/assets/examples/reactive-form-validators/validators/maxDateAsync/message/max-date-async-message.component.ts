import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxDateAsync-message-validator',
    templateUrl: './max-date-async-message.component.html'
})
export class MaxDateAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            registrationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,message:'{{0}} exceeds the Maximum Date Limit' })})], 
        });
    }
}
