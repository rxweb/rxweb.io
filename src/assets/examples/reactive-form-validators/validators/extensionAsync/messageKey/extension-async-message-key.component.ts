import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-extensionAsync-messageKey-validator',
    templateUrl: './extension-async-message-key.component.html'
})
export class ExtensionAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            excelFile:['', RxwebValidators.extensionAsync({validatorConfig:of({extensions:['xls','xlsx']  ,messageKey:'extensionMessageKey' })})], 
        });
    }
}
