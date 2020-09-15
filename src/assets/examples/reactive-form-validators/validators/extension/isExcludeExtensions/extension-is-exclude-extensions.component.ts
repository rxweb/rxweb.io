import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-extension-isExcludeExtensions-validator',
    templateUrl: './extension-is-exclude-extensions.component.html'
})
export class ExtensionIsExcludeExtensionsValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            profileImage:['', RxwebValidators.extension({extensions:['jpg','bmp']  ,isExcludeExtensions:true })], 
        });
    }
}
