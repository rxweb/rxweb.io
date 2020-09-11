import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-timeAsync-messageKey-validator',
    templateUrl: './time-async-message-key.component.html'
})
export class TimeAsyncMessageKeyValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            netInTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({messageKey:'timeMessageKey' })})], 
        });
    }
}
