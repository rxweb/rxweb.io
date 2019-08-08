import {  different, prop } from   "@rxweb/reactive-form-validators"   

export class AccountInfo {

	@prop()
	emailAddress: string;

	@different({fieldName:'emailAddress'  ,messageKey:'differentMessageKey' }) 
	recoveryEmailAddress: string;
	
}
