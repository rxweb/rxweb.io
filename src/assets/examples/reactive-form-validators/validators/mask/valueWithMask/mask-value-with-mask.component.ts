import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-valueWithMask-validator',
    templateUrl: './mask-value-with-mask.component.html'
})
export class MaskValueWithMaskValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            macNumber:['', [RxwebValidators.mask({mask:'**:**:**:**:**:**',valueWithMask:true }),RxwebValidators.mac()]], 
        });
    }
}
