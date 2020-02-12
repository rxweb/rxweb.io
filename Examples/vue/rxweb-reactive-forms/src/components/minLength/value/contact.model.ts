import {  minLength, } from   "@rxweb/reactive-forms"   

export class Contact {

	@minLength({value:10 }) 
	mobileNo: string;
	
	
}
