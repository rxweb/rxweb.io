import {  maxLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	//Shows custom message based on message key
	@maxLengthAsync({validatorConfig:of({value:20  ,messageKey:'maxLengthMessageKey'}) })
	fullName: string;
	
	
}
