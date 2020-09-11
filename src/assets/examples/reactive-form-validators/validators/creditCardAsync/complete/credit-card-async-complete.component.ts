import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-creditCardAsync-complete-validator',
    templateUrl: './credit-card-async-complete.component.html'
})
export class CreditCardAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

				creditCardTypes = [ "Visa", "AmericanExpress", "Maestro", "JCB", "Discover", "DinersClub", "MasterCard",];
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            cardType:['',[],], 
        });
    }
}
