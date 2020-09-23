import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-iban-conditionalExpression-validator',
    templateUrl: './iban-conditional-expression.component.html'
})
export class IbanConditionalExpressionValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            gBBankAccountNumber:['', RxwebValidators.iban({countryCode:'GB' })], 
            dKBankAccountNumber:['', RxwebValidators.iban({countryCode:'CR'  ,conditionalExpression:'x => x.gBBankAccountNumber =="GB33BUKB20201555555555"' })], 
            bHBankAccountNumber:['', RxwebValidators.iban({countryCode:'BH'  ,conditionalExpression:(x,y) => x.gBBankAccountNumber == "GB33BUKB20201555555555" })], 
        });
    }
}
