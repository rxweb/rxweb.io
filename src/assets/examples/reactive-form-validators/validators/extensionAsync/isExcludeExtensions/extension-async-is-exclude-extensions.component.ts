import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-extensionAsync-isExcludeExtensions-validator',
    templateUrl: './extension-async-is-exclude-extensions.component.html'
})
export class ExtensionAsyncIsExcludeExtensionsValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            profileImage:['', RxwebValidators.extensionAsync({validatorConfig:of({extensions:['jpg','bmp']  ,isExcludeExtensions:true })})] 
        })
    }
}
