import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileAsync-minFiles-validator',
    templateUrl: './file-async-min-files.component.html'
})
export class FileAsyncMinFilesValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            totalDocumentFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:5 })})], 
        });
    }
}
