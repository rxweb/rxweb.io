import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-minLength-validator',
    templateUrl: './mask-min-length.component.html'
})
export class MaskMinLengthValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            residentalContactNumber:['', RxwebValidators.mask({mask:'999-9999999'  ,minLength:10 })], 
        });
    }
}
