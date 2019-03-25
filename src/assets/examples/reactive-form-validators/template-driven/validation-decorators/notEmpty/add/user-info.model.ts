import {  notEmpty, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@notEmpty() 
	firstName: string;
	
	
}
