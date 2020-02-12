import {  email, } from   "@rxweb/reactive-forms"   

export class User {

	@email({message:'Please enter valid email' }) 
	otherEmailAddress: string;
	
	
}
