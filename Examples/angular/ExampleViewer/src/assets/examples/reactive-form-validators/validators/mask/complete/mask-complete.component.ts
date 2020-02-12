import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-mask-complete-validator',
    templateUrl: './mask-complete.component.html'
})
export class MaskCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['',], 
            phoneNumber:['', RxwebValidators.mask({mask:'(999)-999 9999' })], 
            postalCode:['', RxwebValidators.mask({mask:'999-999'  ,conditionalExpression:(x,y)=> x.firstName == "Bharat" })], 
            zipcode:['', RxwebValidators.mask({mask:'9999'  ,conditionalExpression:'x => x.firstName == "Bharat"' })], 
            contactNumber:['', RxwebValidators.mask({mask:'999-9999999'  ,message:'Enter a valid Contact Number' })], 
            alternateContactNumber:['', RxwebValidators.mask({mask:'9999999999'  ,messageKey:'maskMessageKey' })], 
        });
    }
}
