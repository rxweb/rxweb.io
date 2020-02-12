import {  notEmpty, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@notEmpty() 
	firstName: string;
	
	
}
