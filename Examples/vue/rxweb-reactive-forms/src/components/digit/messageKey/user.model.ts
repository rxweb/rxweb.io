import {  digit, } from   "@rxweb/reactive-forms"   

export class User {

	@digit({messageKey:'digitMessageKey' }) 
	zipCode: number;
	
	
}
