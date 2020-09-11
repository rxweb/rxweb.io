import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumberAsync-messageKey-validator',
    templateUrl: './min-number-async-message-key.component.html'
})
export class MinNumberAsyncMessageKeyValidatorComponent implements OnInit {
    resultInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.group({
            economics:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35  ,messageKey:'minNumberMessageKey' })})], 
        });
    }
}
