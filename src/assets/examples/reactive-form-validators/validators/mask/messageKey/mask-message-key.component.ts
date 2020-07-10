import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-messageKey-validator',
    templateUrl: './mask-message-key.component.html'
})
export class MaskMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            alternateContactNumber:['', RxwebValidators.mask({mask:'9999999999'  ,messageKey:'maskMessageKey' })], 
        });
    }
}
