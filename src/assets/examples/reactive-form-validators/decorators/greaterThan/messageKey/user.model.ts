import {  greaterThan, } from   "@rxweb/reactive-form-validators"   

export class User {

	@greaterThan({fieldName:'age'  ,messageKey:'greaterThanMessageKey' }) 
	joiningAge: number;
	
	
}
