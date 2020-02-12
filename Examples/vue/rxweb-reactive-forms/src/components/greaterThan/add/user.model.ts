import {  greaterThan,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	age: number;

	@greaterThan({fieldName:'age' }) 
	voterAge: number;
	
	
}
