import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-imageAsync-message-validator',
    templateUrl: './image-async-message.component.html'
})
export class ImageAsyncMessageValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            residenceProof:['', RxwebValidators.imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100  ,message:'File exceed maximum Height.' })})], 
        });
    }
}
