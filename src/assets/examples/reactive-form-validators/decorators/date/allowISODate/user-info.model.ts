import {  date, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@date({allowISODate:true }) 
	registrationDate: string;
	
	
}
