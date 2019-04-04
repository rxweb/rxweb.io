import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-dataUri-messageKey-validator',
    templateUrl: './data-uri-message-key.component.html'
})
export class DataUriMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            pdfDataUri:['', RxwebValidators.dataUri({messageKey:'dataUriMessageKey' })], 
        });
    }
}
