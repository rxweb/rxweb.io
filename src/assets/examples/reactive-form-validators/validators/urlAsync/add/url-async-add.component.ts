import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-urlAsync-add-validator',
    templateUrl: './url-async-add.component.html'
})
export class UrlAsyncAddValidatorComponent implements OnInit {
    webSiteInfoModelFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.webSiteInfoModelFormGroup = this.formBuilder.group({
            adminWebsiteUrl:['',[], RxwebValidators.urlAsync()], 
        });
    }
}
