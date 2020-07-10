import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-url-messageKey-validator',
    templateUrl: './url-message-key.component.html'
})
export class UrlMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            deployedWebSiteUrl:['', RxwebValidators.url({messageKey:'urlMessageKey' })], 
        });
    }
}
