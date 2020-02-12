import {  compare,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	email: string;

	@compare({fieldName:'email' }) 
	confirmEmail: string;
	
	
}
