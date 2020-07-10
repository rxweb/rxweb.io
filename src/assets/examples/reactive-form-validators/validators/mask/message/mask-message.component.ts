import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-message-validator',
    templateUrl: './mask-message.component.html'
})
export class MaskMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            contactNumber:['', RxwebValidators.mask({mask:'999-9999999'  ,message:'Enter a valid Contact Number' })], 
        });
    }
}
