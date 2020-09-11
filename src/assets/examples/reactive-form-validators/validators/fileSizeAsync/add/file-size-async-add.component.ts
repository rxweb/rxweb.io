import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSizeAsync-add-validator',
    templateUrl: './file-size-async-add.component.html'
})
export class FileSizeAsyncAddValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            profilePicture:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:10 })})], 
        });
    }
}
