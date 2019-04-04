import {  greaterThanEqualTo, } from   "@rxweb/reactive-form-validators"   

export class User {

	@greaterThanEqualTo({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey' }) 
	joiningAge: number;
	
	
}
