import {  greaterThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	age: number;

	@greaterThanAsync({validatorConfig:of({fieldName:'age'}) })
	retiermentAge: number;
	
	
	@greaterThanAsync({validatorConfig:of({value:18}) })
	minimumAge: number;
	
	
	@greaterThanAsync({validatorConfig:of({fieldName:'age'  ,message:'Please enter number greater than 0.'}) })
	otherAge: number;
	
	
	@greaterThanAsync({validatorConfig:of({fieldName:'age'  ,messageKey:'greaterThanMessageKey'}) })
	joiningAge: number;
	
	
}
