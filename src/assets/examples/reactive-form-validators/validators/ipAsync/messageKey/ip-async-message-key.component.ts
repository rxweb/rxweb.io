import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ipAsync-messageKey-validator',
    templateUrl: './ip-async-message-key.component.html'
})
export class IpAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            ipV6MessageKey:['', RxwebValidators.ipAsync({validatorConfig:of({version:2  ,messageKey:'ipMessageKey' })})], 
        });
    }
}
