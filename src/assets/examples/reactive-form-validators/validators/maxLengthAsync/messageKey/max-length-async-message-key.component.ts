import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLengthAsync-messageKey-validator',
    templateUrl: './max-length-async-message-key.component.html'
})
export class MaxLengthAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            fullName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:20  ,messageKey:'maxLengthMessageKey' })})], 
        });
    }
}
