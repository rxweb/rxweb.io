import {  requiredTrue, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@requiredTrue() 
	isChecked: boolean;
	
	
}
