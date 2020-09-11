import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-urlAsync-message-validator',
    templateUrl: './url-async-message.component.html'
})
export class UrlAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            maintenanceWebSiteUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({message:'{{0}} Is not the correct url pattern.' })})], 
        });
    }
}
