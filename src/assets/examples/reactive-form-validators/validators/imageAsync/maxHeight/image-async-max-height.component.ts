import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-imageAsync-maxHeight-validator',
    templateUrl: './image-async-max-height.component.html'
})
export class ImageAsyncMaxHeightValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            profilePhoto:['', RxwebValidators.imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100 })})], 
        });
    }
}
