import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-imageAsync-minHeight-validator',
    templateUrl: './image-async-min-height.component.html'
})
export class ImageAsyncMinHeightValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            voterId:['', RxwebValidators.imageAsync({validatorConfig:of({minHeight:10  ,maxHeight:100  ,minWidth:10  ,maxWidth:10 })})], 
        });
    }
}
