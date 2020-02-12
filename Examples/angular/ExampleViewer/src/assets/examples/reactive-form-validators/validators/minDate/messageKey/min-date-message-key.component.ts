import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minDate-messageKey-validator',
    templateUrl: './min-date-message-key.component.html'
})
export class MinDateMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            resignationDate:['', RxwebValidators.minDate({value:'07/30/2018'  ,messageKey:'minDateMessageKey' })], 
        });
    }
}
