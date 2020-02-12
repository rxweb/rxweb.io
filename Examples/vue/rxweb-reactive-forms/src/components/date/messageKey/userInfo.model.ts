import {  date, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@date({messageKey:'dateMessageKey' }) 
	confirmationDate: string;
	
	
}
