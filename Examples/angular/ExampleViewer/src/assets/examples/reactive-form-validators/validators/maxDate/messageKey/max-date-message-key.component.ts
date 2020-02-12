import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxDate-messageKey-validator',
    templateUrl: './max-date-message-key.component.html'
})
export class MaxDateMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            resignationDate:['', RxwebValidators.maxDate({value:'07/30/2018'  ,messageKey:'maxDateMessageKey' })], 
        });
    }
}
