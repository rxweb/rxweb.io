import {  different,prop, } from   "@rxweb/reactive-forms"   

export class AccountInfo {

	@prop()
	firstName: string;

	@different({fieldName:'firstName' }) 
	lastName: string;
	
	
}
