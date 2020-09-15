import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-extensionAsync-extensions-validator',
    templateUrl: './extension-async-extensions.component.html'
})
export class ExtensionAsyncExtensionsValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            profilePicture:['', RxwebValidators.extensionAsync({validatorConfig:of({extensions:['jpg','bmp'] })})], 
        });
    }
}
