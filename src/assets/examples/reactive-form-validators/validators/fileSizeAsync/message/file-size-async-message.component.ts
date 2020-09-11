import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSizeAsync-message-validator',
    templateUrl: './file-size-async-message.component.html'
})
export class FileSizeAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            contactFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:10  ,message:'File exceed maximum size.' })})], 
        });
    }
}
