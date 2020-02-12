import {  different, } from   "@rxweb/reactive-forms"   

export class AccountInfo {

	@different({fieldName:'emailAddress'  ,messageKey:'differentMessageKey' }) 
	recoveryEmailAddress: string;
	
	
}
