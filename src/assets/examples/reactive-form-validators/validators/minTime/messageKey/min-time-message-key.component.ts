import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-messageKey-validator',
    templateUrl: './min-time-message-key.component.html'
})
export class MinTimeMessageKeyValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            netInTime:['',RxwebValidators.minTime({messageKey:'minTimeMessageKey'  ,value:'08:30' })], 
        });
    }
}
