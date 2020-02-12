import {  greaterThan, } from   "@rxweb/reactive-forms"   

export class User {

	@greaterThan({fieldName:'age'  ,message:'Please enter number greater than 0.' }) 
	otherAge: number;
	
	
}
