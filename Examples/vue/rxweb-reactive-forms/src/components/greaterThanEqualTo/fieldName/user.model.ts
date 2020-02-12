import {  greaterThanEqualTo,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	admissionAge: number;

	@greaterThanEqualTo({fieldName:'admissionAge' }) 
	retiermentAge: number;
	
	
}
