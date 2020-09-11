import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSizeAsync-maxSize-validator',
    templateUrl: './file-size-async-max-size.component.html'
})
export class FileSizeAsyncMaxSizeValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            videoFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:100 })})], 
        });
    }
}
