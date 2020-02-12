import {  greaterThanEqualTo, } from   "@rxweb/reactive-forms"   

export class User {

	@greaterThanEqualTo({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.' }) 
	otherAge: number;
	
	
}
