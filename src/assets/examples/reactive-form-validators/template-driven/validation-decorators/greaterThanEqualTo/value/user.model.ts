import {  greaterThanEqualTo, } from   "@rxweb/reactive-form-validators"   

export class User {

	@greaterThanEqualTo({value:18 }) 
	minimumAge: number;
	
	
}
