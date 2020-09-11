import {  creditCardAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	cardType: string;

	@creditCardAsync({validatorConfig:of({fieldName:'cardType'}) })
	creditCardNumber: string;
	
	
}
