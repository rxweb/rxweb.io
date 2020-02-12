import {  greaterThan, prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	age: number;

	@greaterThan({fieldName:'age'  ,message:'Please enter number which is greater than above field input.' }) 
	otherAge: number;
	
}
