import {  greaterThanEqualTo,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	age: number;

	@greaterThanEqualTo({fieldName:'age' }) 
	voterAge: number;
	
	
}
