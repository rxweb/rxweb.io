import {  greaterThanEqualTo, } from   "@rxweb/reactive-forms"   

export class User {

	@greaterThanEqualTo({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey' }) 
	joiningAge: number;
	
	
}
