import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-urlAsync-messageKey-validator',
    templateUrl: './url-async-message-key.component.html'
})
export class UrlAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            deployedWebSiteUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({messageKey:'urlMessageKey' })})], 
        });
    }
}
