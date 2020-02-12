import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-port-messageKey-validator',
    templateUrl: './port-message-key.component.html'
})
export class PortMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            commercialWebsitePort:['', RxwebValidators.port({messageKey:'portMessageKey' })], 
        });
    }
}
