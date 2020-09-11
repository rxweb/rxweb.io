import {  factorAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	firstNumber: number;

	@factorAsync({validatorConfig:of({fieldName:'firstNumber'}) })
	fifthNumber: number;
	
	
}
