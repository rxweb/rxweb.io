import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-ip-messageKey-validator',
    templateUrl: './ip-message-key.component.html'
})
export class IpMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            ipV6MessageKey:['', RxwebValidators.ip({version:2  ,messageKey:'ipMessageKey' })], 
        });
    }
}
