import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-fileAsync-complete-validator',
    templateUrl: './file-async-complete.component.html'
})
export class FileAsyncCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

				fileTypes = [ "Picture", "Document",];
	
	
	
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            fileType:['',[],], 
            totalImageFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({maxFiles:5 })})], 
            totalDocumentFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:5 })})], 
            minMaxFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:5  ,maxFiles:10  ,message:'You can upload minimum 5 and maximum 10 files.' })})], 
            excelFiles:['',[], RxwebValidators.fileAsync({validatorConfig:of({minFiles:2  ,maxFiles:5  ,messageKey:'fileMessageKey' })})], 
        });
    }
}
