import {  digit, } from   "@rxweb/reactive-forms"   

export class User {

	@digit({message:'Please enter only digit.' }) 
	mobileNumber: number;
	
	
}
