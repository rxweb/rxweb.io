import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-imageAsync-messageKey-validator',
    templateUrl: './image-async-message-key.component.html'
})
export class ImageAsyncMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            passport:['',[], RxwebValidators.imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100  ,messageKey:'imageMessageKey' })})], 
        });
    }
}
