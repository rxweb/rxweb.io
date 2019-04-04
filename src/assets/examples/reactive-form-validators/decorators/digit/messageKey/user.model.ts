import {  digit, } from   "@rxweb/reactive-form-validators"   

export class User {

	@digit({messageKey:'digitMessageKey' }) 
	zipCode: number;
	
	
}
