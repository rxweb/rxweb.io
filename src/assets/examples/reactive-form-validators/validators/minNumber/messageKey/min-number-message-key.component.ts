import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumber-messageKey-validator',
    templateUrl: './min-number-message-key.component.html'
})
export class MinNumberMessageKeyValidatorComponent implements OnInit {
    resultInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.group({
            economics:['', RxwebValidators.minNumber({value:35  ,messageKey:'minNumberMessageKey' })], 
        });
    }
}
