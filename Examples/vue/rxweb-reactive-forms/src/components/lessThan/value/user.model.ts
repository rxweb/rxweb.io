import {  lessThan, } from   "@rxweb/reactive-forms"   

export class User {

	@lessThan({value:60 }) 
	maximumAge: number;
	
	
}
