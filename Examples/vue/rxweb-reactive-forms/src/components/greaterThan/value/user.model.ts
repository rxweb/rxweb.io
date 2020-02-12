import {  greaterThan, } from   "@rxweb/reactive-forms"   

export class User {

	@greaterThan({value:18 }) 
	minimumAge: number;
	
	
}
