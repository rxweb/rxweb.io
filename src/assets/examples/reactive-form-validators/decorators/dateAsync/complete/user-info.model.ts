import {  dateAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@dateAsync() 
	birthDate: string;
	
	
	@dateAsync({validatorConfig:of({allowISODate:true })}) 
	registrationDate: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@dateAsync({validatorConfig:of({conditionalExpression:(x,y) => x.birthDate == "16/04/1997"  })}) 
	admissionDate: string;
	
	
	@dateAsync({validatorConfig:of({message:'{{0}} is not a valid date' })}) 
	allocationDate: string;
	
	
	@dateAsync({validatorConfig:of({messageKey:'dateMessageKey' })}) 
	confirmationDate: string;
	
	
}
