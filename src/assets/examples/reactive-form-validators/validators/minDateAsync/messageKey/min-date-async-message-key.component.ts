import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minDateAsync-messageKey-validator',
    templateUrl: './min-date-async-message-key.component.html'
})
export class MinDateAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            resignationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018'  ,messageKey:'minDateMessageKey' })})], 
        });
    }
}
