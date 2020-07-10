import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-mask-validator',
    templateUrl: './mask-mask.component.html'
})
export class MaskMaskValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            phoneNumber:['', RxwebValidators.mask({mask:'(999)-999 9999' })], 
        });
    }
}
