import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileAsync-message-validator',
    templateUrl: './file-async-message.component.html'
})
export class FileAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            minMaxFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:5  ,maxFiles:10  ,message:'You can upload minimum 5 and maximum 10 files.' })})], 
        });
    }
}
