import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-creditCard-message-validator',
    templateUrl: './credit-card-message.component.html'
})
export class CreditCardMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherVisaCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "Visa"'  ,message:'Invalid Visa Credit Card Number.' })], 
            americanExpressCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "AmericanExpress"' })], 
            maestroCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "Maestro"' })], 
            jcbCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "JCB"' })], 
            discoverCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "Discover"' })], 
            masterCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "MasterCard"' })], 
            dinersClubCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:'x => x.cardType == "DinersClub"' })], 
            visaCard:['', RxwebValidators.creditCard({fieldName:'cardType'  ,conditionalExpression:(x,y) => x.cardType == "Visa"   ,message:'Invalid Visa Credit Card Number.' })], 
        });
    }
}
