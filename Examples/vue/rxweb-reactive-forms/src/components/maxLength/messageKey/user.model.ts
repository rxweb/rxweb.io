import {  maxLength, } from   "@rxweb/reactive-forms"   

export class User {

	//Shows custom message based on message key
	@maxLength({value:20  ,messageKey:'maxLengthMessageKey' }) 
	fullName: string;
	
	
}
