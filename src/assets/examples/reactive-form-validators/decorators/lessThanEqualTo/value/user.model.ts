import {  lessThanEqualTo, } from   "@rxweb/reactive-form-validators"   

export class User {

	@lessThanEqualTo({value:60 }) 
	maximumAge: number;
	
	
}
