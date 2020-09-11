import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileAsync-add-validator',
    templateUrl: './file-async-add.component.html'
})
export class FileAsyncAddValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            totalImageFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({maxFiles:5 })})], 
            totalDocumentFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:5 })})], 
        });
    }
}
