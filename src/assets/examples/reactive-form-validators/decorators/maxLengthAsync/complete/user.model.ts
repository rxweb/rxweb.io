import {  maxLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@maxLengthAsync({validatorConfig:of({value:16}) })
	firstName: string;
	
	
	//Shows custom message
	@maxLengthAsync({validatorConfig:of({value:10  ,message:'Maximum 10 characters are allowed'}) })
	userName: string;
	
	
	//Shows custom message based on message key
	@maxLengthAsync({validatorConfig:of({value:20  ,messageKey:'maxLengthMessageKey'}) })
	fullName: string;
	
	
}
