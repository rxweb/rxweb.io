import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-image-messageKey-validator',
    templateUrl: './image-message-key.component.html'
})
export class ImageMessageKeyValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            passport:['', RxwebValidators.image({maxHeight:100  ,maxWidth:100  ,messageKey:'imageMessageKey' })], 
        });
    }
}
