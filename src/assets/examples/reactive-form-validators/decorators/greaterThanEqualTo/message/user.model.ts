import {  greaterThanEqualTo, prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	admissionAge: number;

	@greaterThanEqualTo({fieldName:'admissionAge'  ,message:'Please enter number which is greater than or equal to above field input.' }) 
	otherAge: number;
	
}
