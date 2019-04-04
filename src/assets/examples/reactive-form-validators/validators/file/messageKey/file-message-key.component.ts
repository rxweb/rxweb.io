import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-file-messageKey-validator',
    templateUrl: './file-message-key.component.html'
})
export class FileMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            excelFiles:['', RxwebValidators.file({minFiles:2  ,maxFiles:5  ,messageKey:'fileMessageKey' })], 
        });
    }
}
