import {  lessThanEqualTo, } from   "@rxweb/reactive-forms"   

export class User {

	@lessThanEqualTo({value:60 }) 
	maximumAge: number;
	
	
}
