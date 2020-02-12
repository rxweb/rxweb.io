import {  compare,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	password: string;

	@compare({fieldName:'password' }) 
	confirmPassword: string;
	
	
}
