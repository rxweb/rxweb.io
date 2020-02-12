import {  greaterThan, } from   "@rxweb/reactive-forms"   

export class User {

	@greaterThan({fieldName:'age'  ,messageKey:'greaterThanMessageKey' }) 
	joiningAge: number;
	
	
}
