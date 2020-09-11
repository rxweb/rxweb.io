import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSizeAsync-minSize-validator',
    templateUrl: './file-size-async-min-size.component.html'
})
export class FileSizeAsyncMinSizeValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            audioFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({minSize:3  ,maxSize:100 })})], 
        });
    }
}
