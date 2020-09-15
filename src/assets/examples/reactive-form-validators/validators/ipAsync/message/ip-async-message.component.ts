import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ipAsync-message-validator',
    templateUrl: './ip-async-message.component.html'
})
export class IpAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            ipV4Message:['', RxwebValidators.ipAsync({validatorConfig:of({version:1  ,message:'Please Enter IP V4 type Only' })})], 
        });
    }
}
