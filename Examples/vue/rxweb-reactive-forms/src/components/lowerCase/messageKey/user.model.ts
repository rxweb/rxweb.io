import {  lowerCase, } from   "@rxweb/reactive-forms"   

export class User {

	//Shows custom message based on message key
	@lowerCase({messageKey:'lowerCaseMessageKey' }) 
	state: string;
	
	
}
