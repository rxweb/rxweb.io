import {  date, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@date({message:'{{0}} is not a valid date' }) 
	allocationDate: string;
	
	
}
