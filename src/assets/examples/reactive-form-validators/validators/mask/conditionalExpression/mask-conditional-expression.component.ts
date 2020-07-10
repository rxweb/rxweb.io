import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-conditionalExpression-validator',
    templateUrl: './mask-conditional-expression.component.html'
})
export class MaskConditionalExpressionValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['',], 
            zipcode:['', RxwebValidators.mask({mask:'9999'  ,conditionalExpression:'x => x.firstName == "Bharat"' })], 
            postalCode:['', RxwebValidators.mask({mask:'999-999'  ,conditionalExpression:(x,y)=> x.firstName == "Bharat" })], 
        });
    }
}
