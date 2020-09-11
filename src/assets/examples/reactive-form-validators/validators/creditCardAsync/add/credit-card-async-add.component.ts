import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-creditCardAsync-add-validator',
    templateUrl: './credit-card-async-add.component.html'
})
export class CreditCardAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

				creditCardTypes = [ "Visa", "AmericanExpress", "Maestro", "JCB", "Discover", "DinersClub", "MasterCard",];
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            cardType:['',[],], 
            creditCardNumber:['',[], RxwebValidators.creditCardAsync({validatorConfig:of({fieldName:'cardType' })})], 
        });
    }
}
