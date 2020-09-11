import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileAsync-messageKey-validator',
    templateUrl: './file-async-message-key.component.html'
})
export class FileAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            excelFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:2  ,maxFiles:5  ,messageKey:'fileMessageKey' })})], 
        });
    }
}
