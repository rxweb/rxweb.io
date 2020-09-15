import {  dateAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@dateAsync() 
	birthDate: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@dateAsync({validatorConfig:of({conditionalExpression:(x,y) => x.birthDate == "16/04/1997"  })}) 
	admissionDate: string;
	
	
}
