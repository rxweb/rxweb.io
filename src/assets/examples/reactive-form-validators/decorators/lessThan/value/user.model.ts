import {  lessThan, } from   "@rxweb/reactive-form-validators"   

export class User {

	@lessThan({value:60 }) 
	maximumAge: number;
	
	
}
