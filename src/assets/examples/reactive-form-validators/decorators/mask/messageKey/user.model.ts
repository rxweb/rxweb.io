import {  mask, } from   "@rxweb/reactive-form-validators"   

export class User {

	//Shows custom message based on message key
	@mask({mask:'9999999999'  ,messageKey:'maskMessageKey' }) 
	alternateContactNumber: string;
	
	
}
