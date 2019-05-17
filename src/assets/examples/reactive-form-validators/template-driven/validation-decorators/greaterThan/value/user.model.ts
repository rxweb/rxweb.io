import {  greaterThan, } from   "@rxweb/reactive-form-validators"   

export class User {

	@greaterThan({value:18 }) 
	minimumAge: number;
	
	
}
