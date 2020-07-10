import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-messageKey-validator',
    templateUrl: './max-time-message-key.component.html'
})
export class MaxTimeMessageKeyValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            totalInTime:['', RxwebValidators.maxTime({value:'12:00' })], 
            netInTime:['', RxwebValidators.maxTime({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' })], 
        });
    }
}
