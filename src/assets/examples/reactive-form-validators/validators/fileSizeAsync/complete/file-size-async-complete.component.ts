import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileSizeAsync-complete-validator',
    templateUrl: './file-size-async-complete.component.html'
})
export class FileSizeAsyncCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

				fileTypes = [ "Picture", "Document",];
	
	
	
	
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            fileType:['',[],], 
            videoFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:100 })})], 
            audioFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({minSize:3  ,maxSize:100 })})], 
            contactFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:10  ,message:'File exceed maximum size.' })})], 
            profilePicture:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:50 })})], 
            excelFile:['',[], RxwebValidators.fileSizeAsync({validatorConfig:of({maxSize:100  ,messageKey:'fileSizeMessageKey' })})], 
        });
    }
}
