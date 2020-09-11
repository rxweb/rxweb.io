import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSizeAsync-messageKey-validator',
    templateUrl: './file-size-async-message-key.component.html'
})
export class FileSizeAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            excelFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:100  ,messageKey:'fileSizeMessageKey' })})], 
        });
    }
}
