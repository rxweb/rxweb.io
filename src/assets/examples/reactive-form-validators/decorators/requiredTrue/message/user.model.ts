import {  requiredTrue, } from   "@rxweb/reactive-form-validators"   

export class User {

	@requiredTrue({message:'Should be active' }) 
	isActive: string;
	
	
}
