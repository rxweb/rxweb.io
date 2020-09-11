import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-urlAsync-complete-validator',
    templateUrl: './url-async-complete.component.html'
})
export class UrlAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            adminWebsiteUrl:['',[], RxwebValidators.urlAsync()], 
            maintenanceWebSiteUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({message:'{{0}} Is not the correct url pattern.' })})], 
            localhostUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({urlValidationType:2 })})], 
            fqdnDomainUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({urlValidationType:1 })})], 
            intraServerUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({urlValidationType:3 })})], 
            deployedWebSiteUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({messageKey:'urlMessageKey' })})], 
        });
    }
}
