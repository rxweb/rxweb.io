import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-url-urlValidationType-validator',
    templateUrl: './url-url-validation-type.component.html'
})
export class UrlUrlValidationTypeValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            localhostUrl:['', RxwebValidators.url({urlValidationType:2 })], 
        });
    }
}
