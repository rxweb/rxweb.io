import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-extensionAsync-add-validator',
    templateUrl: './extension-async-add.component.html'
})
export class ExtensionAsyncAddValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            profilePicture:['',[], RxwebValidators.extensionAsync({validatorConfig:of({extensions:['jpg','bmp'] })})], 
        });
    }
}
