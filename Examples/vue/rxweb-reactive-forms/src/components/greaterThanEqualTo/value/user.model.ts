import {  greaterThanEqualTo, } from   "@rxweb/reactive-forms"   

export class User {

	@greaterThanEqualTo({value:18 }) 
	minimumAge: number;
	
	
}
