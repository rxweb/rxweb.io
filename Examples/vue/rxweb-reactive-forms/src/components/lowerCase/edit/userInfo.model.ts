import {  lowerCase, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@lowerCase() 
	username: string;
	
	
}
