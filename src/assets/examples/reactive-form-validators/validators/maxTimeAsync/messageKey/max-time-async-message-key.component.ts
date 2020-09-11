import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-messageKey-validator',
    templateUrl: './max-time-async-message-key.component.html'
})
export class MaxTimeAsyncMessageKeyValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            netInTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' })})], 
        });
    }
}
