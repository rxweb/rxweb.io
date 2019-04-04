import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSize-messageKey-validator',
    templateUrl: './file-size-message-key.component.html'
})
export class FileSizeMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            excelFile:['', RxwebValidators.fileSize({maxSize:50  ,messageKey:'fileSizeMessageKey' })], 
        });
    }
}
