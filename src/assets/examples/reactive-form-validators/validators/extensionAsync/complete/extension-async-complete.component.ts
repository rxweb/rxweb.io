import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-extensionAsync-complete-validator',
    templateUrl: './extension-async-complete.component.html'
})
export class ExtensionAsyncCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

				fileTypes = [ "Picture", "Document",];
	
	
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            fileType:['',], 
            profilePicture:['', RxwebValidators.extensionAsync({validatorConfig:of({extensions:['jpg','bmp'] })})], 
            contactFile:['', RxwebValidators.extensionAsync({validatorConfig:of({extensions:['vcf']  ,message:'You can upload only .vcf files.' })})], 
            excelFile:['', RxwebValidators.extensionAsync({validatorConfig:of({extensions:['xls','xlsx']  ,messageKey:'extensionMessageKey' })})], 
        });
    }
}
