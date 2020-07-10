import {  date, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@date({messageKey:'dateMessageKey' }) 
	confirmationDate: string;
	
	
}
