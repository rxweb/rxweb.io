import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileAsync-maxFiles-validator',
    templateUrl: './file-async-max-files.component.html'
})
export class FileAsyncMaxFilesValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            totalImageFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({maxFiles:5 })})], 
        });
    }
}
