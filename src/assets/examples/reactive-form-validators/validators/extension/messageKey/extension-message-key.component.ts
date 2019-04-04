import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-extension-messageKey-validator',
    templateUrl: './extension-message-key.component.html'
})
export class ExtensionMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            excelFile:['', RxwebValidators.extension({extensions:['xls','xlsx']  ,messageKey:'extensionMessageKey' })], 
        });
    }
}
