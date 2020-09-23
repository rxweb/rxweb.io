import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-iban-complete-validator',
    templateUrl: './iban-complete.component.html'
})
export class IbanCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            gBBankAccountNumber:['', RxwebValidators.iban({countryCode:'GB' })], 
            bHBankAccountNumber:['', RxwebValidators.iban({countryCode:'BH'  ,conditionalExpression:(x,y) => x.gBBankAccountNumber == "GB33BUKB20201555555555" })], 
            dKBankAccountNumber:['', RxwebValidators.iban({countryCode:'CR'  ,conditionalExpression:'x => x.gBBankAccountNumber =="GB33BUKB20201555555555"' })], 
            cHBankAccountNumber:['', RxwebValidators.iban({message:'Enter valid CH account Number.' })], 
            cRBankAccountNumber:['', RxwebValidators.iban({messageKey:'ibanMessageKey' })], 
        });
    }
}
