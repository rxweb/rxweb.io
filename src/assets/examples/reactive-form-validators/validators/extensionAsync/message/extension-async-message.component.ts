import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-extensionAsync-message-validator',
    templateUrl: './extension-async-message.component.html'
})
export class ExtensionAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            contactFile:['',[], RxwebValidators.extensionAsync({validatorConfig:of({extensions:['vcf']  ,message:'You can upload only .vcf files.' })})], 
        });
    }
}
