import {  lowerCase, } from   "@rxweb/reactive-form-validators"   

export class User {

	//Shows custom message based on message key
	@lowerCase({messageKey:'lowerCaseMessageKey' }) 
	state: string;
	
	
}
