import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-urlAsync-urlValidationType-validator',
    templateUrl: './url-async-url-validation-type.component.html'
})
export class UrlAsyncUrlValidationTypeValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            localhostUrl:['',[], RxwebValidators.urlAsync({validatorConfig:of({urlValidationType:2 })})], 
        });
    }
}
