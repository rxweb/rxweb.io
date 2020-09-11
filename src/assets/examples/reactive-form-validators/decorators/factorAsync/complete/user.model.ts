import {  factorAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	firstNumber: number;

	@factorAsync({validatorConfig:of({fieldName:'firstNumber'}) })
	fifthNumber: number;
	
	
	@factorAsync({validatorConfig:of({dividend:50}) })
	fourthNumber: number;
	
	
	@factorAsync({validatorConfig:of({dividend:30  ,message:'{{0}} is not a factor of 50'}) })
	sixthNumber: number;
	
	
	@factorAsync({validatorConfig:of({dividend:50  ,messageKey:'factorMessageKey'}) })
	seventhNumber: number;
	
	
}
