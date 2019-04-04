import {  maxLength, } from   "@rxweb/reactive-form-validators"   

export class User {

	//Shows custom message based on message key
	@maxLength({value:20  ,messageKey:'maxLengthMessageKey' }) 
	fullName: string;
	
	
}
