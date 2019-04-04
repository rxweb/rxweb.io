import {  different, } from   "@rxweb/reactive-form-validators"   

export class AccountInfo {

	@different({fieldName:'emailAddress'  ,messageKey:'differentMessageKey' }) 
	recoveryEmailAddress: string;
	
	
}
