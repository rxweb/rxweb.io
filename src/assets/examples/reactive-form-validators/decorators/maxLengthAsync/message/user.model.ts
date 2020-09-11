import {  maxLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	//Shows custom message
	@maxLengthAsync({validatorConfig:of({value:10  ,message:'Maximum 10 characters are allowed'}) })
	userName: string;
	
	
}
